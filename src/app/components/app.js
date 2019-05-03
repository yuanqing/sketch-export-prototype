import React, { useCallback } from 'react'

import getLocationHash from '../get-location-hash'
import Navigation from './navigation/navigation'
import Artboards from './artboards'
import { RouteProvider } from '../route-context'
import { ViewportProvider } from '../viewport-context'

export default function App ({
  viewportWidth,
  viewportHeight,
  startPointArtboardIds,
  pages
}) {
  const startId =
    getLocationHash() || startPointArtboardIds[0] || Object.keys(pages)[0]
  const getArtboardById = useCallback(
    function (route) {
      let result = null
      pages.forEach(function (page) {
        page.artboards.forEach(function (artboard) {
          if (result) {
            return
          }
          if (artboard.id == route) {
            result = artboard
          }
        })
      })
      return result
    },
    [pages]
  )
  return (
    <ViewportProvider
      viewportWidth={viewportWidth}
      viewportHeight={viewportHeight}
    >
      <RouteProvider initialRoute={startId}>
        <Navigation pages={pages} viewportWidth={viewportWidth} />
        <Artboards getArtboardById={getArtboardById} />
      </RouteProvider>
    </ViewportProvider>
  )
}
