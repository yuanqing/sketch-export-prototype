import React from 'react'

import { useRoute } from '../route-context'

export default function HotspotLayer ({ children }) {
  const { width, height, x, y, hotspot } = children
  const { routeTo, routeBack, previousRoute } = useRoute()
  const { targetId, animationType } = hotspot
  const isRouteBack = targetId === 'back'
  if (isRouteBack && previousRoute === null) {
    return null
  }
  const style = {
    top: y,
    left: x,
    width,
    height
  }
  const handleClick = function () {
    if (isRouteBack) {
      routeBack(animationType)
      return
    }
    routeTo({ route: targetId, animationType })
  }
  return <div className='HotspotLayer' style={style} onClick={handleClick} />
}
