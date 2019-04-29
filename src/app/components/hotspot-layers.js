import React from 'react'

import HotspotLayer from './hotspot-layer'

export default function HotspotLayers ({ data }) {
  return data
    .map(function (hotspotLayer, index) {
      return <HotspotLayer key={index} data={hotspotLayer} />
    })
    .filter(Boolean)
}
