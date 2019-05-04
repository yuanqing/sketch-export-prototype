import React, { useCallback } from 'react'

import getLocationHash from '../common/get-location-hash'
import Navigation from './navigation/navigation'
import Artboards from './artboards/artboards'
import { RouteProvider } from '../contexts/route-context'
import { ViewportProvider } from '../contexts/viewport-context'
import './app.scss'

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
          if (artboard.id === route) {
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
