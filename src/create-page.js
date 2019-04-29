import { getCoordinatesRelativeToArtboard } from 'sketch-plugin-helper'

import createImageFileName from './image/create-image-filename'

export default function createPage ({
  artboard,
  fixedLayers,
  hotspotLayers,
  imageFormat,
  imageScale
}) {
  const { width, height } = artboard.frame
  return {
    id: artboard.id,
    image: {
      fileName: createImageFileName({
        id: artboard.id,
        imageFormat,
        imageScale
      }),
      width,
      height
    },
    fixedLayers: fixedLayers.map(function (layer) {
      const { width, height } = layer.frame
      const { x, y } = getCoordinatesRelativeToArtboard(layer)
      return {
        fileName: createImageFileName({
          id: layer.id,
          imageFormat,
          imageScale
        }),
        width,
        height,
        x,
        y,
        ...collectHotspotValues(layer)
      }
    }),
    hotspotLayers: hotspotLayers.map(function (layer) {
      const { width, height } = layer.frame
      const { x, y } = getCoordinatesRelativeToArtboard(layer)
      return {
        width,
        height,
        x,
        y,
        ...collectHotspotValues(layer)
      }
    })
  }
}

function collectHotspotValues ({ flow }) {
  if (!flow) {
    return {}
  }
  const { targetId, animationType } = flow
  return {
    hotspot: {
      targetId,
      animationType
    }
  }
}
