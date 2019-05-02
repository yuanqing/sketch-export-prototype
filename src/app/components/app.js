import React from 'react'

import getLocationHash from '../get-location-hash'
import Navigation from './navigation'
import Pages from './pages'
import { RouteProvider } from '../route-context'
import { ViewportProvider } from '../viewport-context'

export default function App ({
  viewportWidth,
  viewportHeight,
  startIds,
  pages
}) {
  const startId = getLocationHash() || startIds[0] || Object.keys(pages)[0]
  return (
    <ViewportProvider
      viewportWidth={viewportWidth}
      viewportHeight={viewportHeight}
    >
      <RouteProvider initialRoute={startId}>
        <Navigation data={pages} />
        <Pages data={pages} />
      </RouteProvider>
    </ViewportProvider>
  )
}
