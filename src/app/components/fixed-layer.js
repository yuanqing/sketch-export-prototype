import React from 'react'

import HotspotLayer from './hotspot-layer'

export default function FixedLayer ({
  children,
  artboardHeight,
  viewportHeight
}) {
  const { fileName, x, y, width, height, hotspot } = children
  let top
  if (y < viewportHeight) {
    top = y
  } else if (artboardHeight - y - height < viewportHeight) {
    top = viewportHeight - artboardHeight + y
  } else {
    return null
  }
  const imageStyle = {
    top,
    left: x,
    width,
    height
  }
  const imageElement = fileName && (
    <img className='FixedLayer-image' src={fileName} style={imageStyle} />
  )
  if (hotspot) {
    const hotspotLayer = {
      width,
      height,
      x,
      y,
      hotspot
    }
    const hotspotLayerElement = <HotspotLayer>{hotspotLayer}</HotspotLayer>
    if (imageElement) {
      return (
        <div>
          {imageElement}
          {hotspotLayerElement}
        </div>
      )
    }
    return hotspotLayerElement
  }
  return imageElement
}
