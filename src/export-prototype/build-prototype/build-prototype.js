import { iterateNestedLayers, iterateParentLayers } from 'sketch-plugin-helper'
import { writeFileSync } from '@skpm/fs'

import { prototypeDataFile } from '../constants'
import createArtboard from './create-artboard'
import writeImages from './write-images'

export default function buildPrototype ({ pages, outputDirectoryPath }) {
  const startPointArtboardIds = []
  const pagesData = []
  pages.forEach(function (page) {
    if (page.isSymbolsPage()) {
      return
    }
    const artboardsData = []
    page.layers.forEach(function (layer) {
      if (layer.type !== 'Artboard') {
        return
      }
      const artboard = layer
      if (artboard.flowStartPoint) {
        startPointArtboardIds.push(artboard.id)
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
      const artboardData = createArtboard({
        artboard,
        fixedLayers,
        hotspotLayers
      })
      artboardsData.push(artboardData)
      writeImages({
        artboard,
        fixedLayers,
        outputDirectoryPath
      })
    })
    pagesData.push({
      name: page.name,
      id: page.id,
      artboards: artboardsData
    })
  })
  buildPrototypeDataFile({
    outputDirectoryPath,
    config: {
      viewportWidth: 375,
      viewportHeight: 812,
      startPointArtboardIds,
      pages: pagesData
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
    config
  )}\n`
  writeFileSync(outputFilePath, fileContent)
}
