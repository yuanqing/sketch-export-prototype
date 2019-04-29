import React from 'react'

import { useRoute } from '../route-context'

export default function HotspotLayer ({ data }) {
  const { width, height, x, y, hotspot } = data
  const { routeTo, routeBack, previousRoute } = useRoute()
  const { targetId, animationType } = hotspot
  const isRouteBack = targetId === 'back'
  if (isRouteBack && previousRoute === null) {
    return null
  }
  const props = {
    style: {
      cursor: 'default',
      position: 'absolute',
      top: y,
      left: x,
      width,
      height
    },
    onClick: function () {
      if (isRouteBack) {
        routeBack(animationType)
        return
      }
      routeTo({ route: targetId, animationType })
    }
  }
  return <div {...props} />
}
