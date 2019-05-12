import { calculateCoordinatesRelativeToArtboard } from 'sketch-plugin-helper'

import createImageFileName from './create-image-filename'

export default function createArtboard ({
  artboard,
  fixedLayers,
  hotspotLayers
}) {
  const { width, height } = artboard.frame
  return {
    id: artboard.id,
    name: artboard.name,
    isStartPoint: artboard.flowStartPoint === true,
    image: {
      fileName: createImageFileName(artboard.id),
      width,
      height
    },
    fixedLayers: fixedLayers.map(function ({ hasImage, layer }) {
      const { width, height } = layer.frame
      const { x, y } = calculateCoordinatesRelativeToArtboard(layer)
      return {
        fileName: hasImage ? createImageFileName(layer.id) : null,
        width,
        height,
        x,
        y,
        ...collectHotspotValues(layer)
      }
    }),
    hotspotLayers: hotspotLayers.map(function (layer) {
      const { width, height } = layer.frame
      const { x, y } = calculateCoordinatesRelativeToArtboard(layer)
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
      animationType: animationType === 'none' ? 'appear' : animationType
    }
  }
}
