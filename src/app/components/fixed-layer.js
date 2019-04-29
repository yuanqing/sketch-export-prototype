import React from 'react'

import HotspotLayer from './hotspot-layer'

export default function FixedLayer ({ data, pageHeight, viewportHeight }) {
  const { fileName, x, y, width, height, hotspot } = data
  let top
  if (y < viewportHeight) {
    top = y
  } else if (pageHeight - y - height < viewportHeight) {
    top = viewportHeight - pageHeight + y
  } else {
    return null
  }
  const props = {
    src: fileName,
    style: {
      display: 'block',
      position: 'absolute',
      top,
      left: x,
      width,
      height
    }
  }
  if (hotspot) {
    const hotspotLayer = {
      width,
      height,
      x,
      y,
      hotspot
    }
    return (
      <div>
        <img {...props} />
        <HotspotLayer data={hotspotLayer} />
      </div>
    )
  }
  return <img {...props} />
}
