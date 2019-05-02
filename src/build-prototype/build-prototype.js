import { iterateNestedLayers, iterateParentLayers } from 'sketch-plugin-helper'
import { writeFileSync } from '@skpm/fs'

import { prototypeDataFile } from '../constants'
import createPage from './create-page'
import writeImages from './write-images'

export default function buildPrototype ({ artboards, outputDirectoryPath }) {
  const startIds = []
  const pages = {}
  artboards.forEach(function (artboard) {
    if (artboard.flowStartPoint) {
      startIds.push(artboard.id)
    }
    const fixedLayers = []
    const hotspotLayers = []
    iterateNestedLayers(artboard.layers, function (layer) {
      if (layer.hidden) {
        return
      }
      if (isLayerFixed(layer)) {
        // Fixed image
        fixedLayers.push({ hasImage: true, layer })
        return
      }
      if (layer.flow) {
        // Fixed hotspot
        if (isLayerInFixedGroup(layer)) {
          fixedLayers.push({ hasImage: false, layer })
          return
        }
        // Non-fixed hotspot
        hotspotLayers.push(layer)
      }
    })
    pages[artboard.id] = createPage({
      artboard,
      fixedLayers,
      hotspotLayers
    })
    writeImages({
      artboard,
      fixedLayers,
      outputDirectoryPath
    })
  })
  buildPrototypeDataFile({
    outputDirectoryPath,
    config: {
      viewportWidth: 375,
      viewportHeight: 812,
      startIds,
      pages
    }
  })
}

function isLayerFixed (layer) {
  return layer.sketchObject.isFixedToViewport() === 1
}

function isLayerInFixedGroup (layer) {
  let result = false
  iterateParentLayers(layer, function (parentLayer) {
    if (result) {
      return
    }
    if (isLayerFixed(parentLayer)) {
      result = true
    }
  })
  return result
}

function buildPrototypeDataFile ({ outputDirectoryPath, config }) {
  const outputFilePath = `${outputDirectoryPath}/${prototypeDataFile}`
  const fileContent = `window.__SKETCH_PROTOTYPE_DATA__=${JSON.stringify(
    config,
    null,
    2
  )}\n`
  writeFileSync(outputFilePath, fileContent)
}
