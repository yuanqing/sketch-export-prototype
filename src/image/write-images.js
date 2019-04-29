import { export as sketchExport } from 'sketch/dom'

function setLayerVisibilityFactory (isVisible) {
  return function (layers) {
    layers.forEach(function (layer) {
      layer.hidden = !isVisible
    })
  }
}

const showLayers = setLayerVisibilityFactory(true)
const hideLayers = setLayerVisibilityFactory(false)

export default function writeImages ({
  artboard,
  fixedLayers,
  outputDirectoryPath,
  imageFormat,
  imageScale
}) {
  const outputFilePath = `${outputDirectoryPath}/images`
  fixedLayers.forEach(function (layer) {
    writeImage({
      layer,
      outputFilePath,
      imageFormat,
      imageScale
    })
  })
  hideLayers(fixedLayers)
  writeImage({
    layer: artboard,
    outputFilePath,
    imageFormat,
    imageScale
  })
  showLayers(fixedLayers)
}

function writeImage ({ layer, outputFilePath, imageFormat, imageScale }) {
  sketchExport(layer, {
    formats: imageFormat,
    scales: imageScale,
    output: outputFilePath,
    'use-id-for-name': true
  })
}
