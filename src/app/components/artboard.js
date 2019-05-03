import React from 'react'

import FixedLayers from './fixed-layers'
import HotspotLayers from './hotspot-layers'

export default function Artboard ({ artboard }) {
  const { image, hotspotLayers, fixedLayers } = artboard
  const imageStyle = {
    width: image.width,
    height: image.height
  }
  return (
    <div className='Artboard'>
      <div className='Artboard-scrollable'>
        <img
          className='Artboard-scrollableImage'
          src={image.fileName}
          style={imageStyle}
        />
        <HotspotLayers>{hotspotLayers}</HotspotLayers>
      </div>
      <FixedLayers artboardHeight={image.height}>{fixedLayers}</FixedLayers>
    </div>
  )
}
