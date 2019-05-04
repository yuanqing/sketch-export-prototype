import { export as sketchExport } from 'sketch/dom'

import { imageFormat, imageScale, imagesDirectory } from './constants'

function setLayerVisibilityFactory (isVisible) {
  return function (layers) {
    layers.forEach(function ({ layer }) {
      layer.hidden = !isVisible
    })
  }
}

const showLayers = setLayerVisibilityFactory(true)
const hideLayers = setLayerVisibilityFactory(false)

export default function writeImages ({
  artboard,
  fixedLayers,
  outputDirectoryPath
}) {
  fixedLayers.forEach(function ({ hasImage, layer }) {
    if (hasImage) {
      writeImage({
        layer,
        outputDirectoryPath
      })
    }
  })
  hideLayers(fixedLayers)
  writeImage({
    layer: artboard,
    outputDirectoryPath
  })
  showLayers(fixedLayers)
}

function writeImage ({ layer, outputDirectoryPath }) {
  sketchExport(layer, {
    formats: imageFormat,
    scales: imageScale,
    output: `${outputDirectoryPath}/${imagesDirectory}`,
    'use-id-for-name': true
  })
}
