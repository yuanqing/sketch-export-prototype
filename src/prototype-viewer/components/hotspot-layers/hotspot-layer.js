import React, { useCallback } from 'react'
import classNames from '@sindresorhus/class-names'

import { useHotspotVisibility } from '../../contexts/hotspot-visibility-context'
import { useRoute } from '../../contexts/route-context'
import style from './hotspot-layer.scss'

export default function HotspotLayer ({ children }) {
  const { isVisible } = useHotspotVisibility()
  const { width, height, x, y, hotspot } = children
  const { routeTo, routeBack, previousRoute } = useRoute()
  const { targetId, animationType } = hotspot
  const isRouteBack = targetId === 'back'
  if (isRouteBack && previousRoute === null) {
    return null
  }
  const hotspotLayerStyle = {
    top: y,
    left: x,
    width,
    height
  }
  const handleClick = useCallback(function (event) {
    event.stopPropagation()
    if (isRouteBack) {
      routeBack(animationType)
      return
    }
    routeTo({ route: targetId, animationType })
  })
  const className = classNames(style.root, isVisible && style.isVisible)
  return (
    <a className={className} style={hotspotLayerStyle} onClick={handleClick} />
  )
}
