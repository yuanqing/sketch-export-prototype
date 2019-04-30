import {
  getArtboardsOnCurrentPage,
  iterateNestedLayers,
  showErrorMessage,
  showSuccessMessage
} from 'sketch-plugin-helper'

import createPage from './create-page'
import writeConfig from './write-config'
import writeImages from './image/write-images'

const outputDirectoryPath =
  '/Users/yuanqing/Desktop/sketch-export-prototype/build'
const viewportWidth = 375
const viewportHeight = 812
const imageScale = 3
const imageFormat = 'png'

export default function exportPrototype () {
  const artboards = getArtboardsOnCurrentPage()
  if (artboards.lengths === 0) {
    showErrorMessage('No artboards')
    return
  }
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
      if (layer.sketchObject.isFixedToViewport() === 1) {
        fixedLayers.push(layer)
        return
      }
      if (layer.flow) {
        hotspotLayers.push(layer)
      }
    })
    pages[artboard.id] = createPage({
      artboard,
      hotspotLayers,
      fixedLayers,
      imageFormat,
      imageScale
    })
    writeImages({
      artboard,
      fixedLayers,
      outputDirectoryPath,
      imageFormat,
      imageScale
    })
  })
  writeConfig({
    outputFilePath: `${outputDirectoryPath}/data.js`,
    config: {
      viewportWidth,
      viewportHeight,
      imageScale,
      startIds,
      pages
    }
  })
  showSuccessMessage(`Built prototype to ${outputDirectoryPath}`)
}
