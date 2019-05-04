import React from 'react'

import FixedLayers from '../fixed-layers/fixed-layers'
import HotspotLayers from '../hotspot-layers/hotspot-layers'
import style from './artboard.scss'

export default function Artboard ({ artboard }) {
  const { image, hotspotLayers, fixedLayers } = artboard
  const imageStyle = {
    width: image.width,
    height: image.height
  }
  return (
    <div className={style.root}>
      <div className={style.scrollable}>
        <img className={style.image} src={image.fileName} style={imageStyle} />
        <HotspotLayers>{hotspotLayers}</HotspotLayers>
      </div>
      <FixedLayers artboardHeight={image.height}>{fixedLayers}</FixedLayers>
    </div>
  )
}
