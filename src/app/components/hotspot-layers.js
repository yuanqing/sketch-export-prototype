import React from 'react'

import HotspotLayer from './hotspot-layer'

export default function HotspotLayers ({ children }) {
  return children
    .map(function (hotspotLayer, index) {
      return <HotspotLayer key={index}>{hotspotLayer}</HotspotLayer>
    })
    .filter(Boolean)
}
