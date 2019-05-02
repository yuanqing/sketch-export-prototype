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
  const style = {
    cursor: 'pointer',
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginTop: Math.floor(viewportHeight / 2) * -1,
    marginLeft: Math.floor(viewportWidth / 2) * -1,
    width: viewportWidth,
    height: viewportHeight,
    borderRadius: 10,
    overflow: 'hidden'
  }
  const startId = getLocationHash() || startIds[0] || Object.keys(pages)[0]
  return (
    <div style={style}>
      <ViewportProvider
        viewportWidth={viewportWidth}
        viewportHeight={viewportHeight}
      >
        <RouteProvider initialRoute={startId}>
          <Navigation data={pages} />
          <Pages data={pages} />
        </RouteProvider>
      </ViewportProvider>
    </div>
  )
}
