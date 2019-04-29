import React from 'react'

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
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: viewportWidth,
    height: viewportHeight,
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden'
  }
  return (
    <div style={style}>
      <ViewportProvider
        viewportWidth={viewportWidth}
        viewportHeight={viewportHeight}
      >
        <RouteProvider initialRoute={startIds[0]}>
          <Pages data={pages} />
        </RouteProvider>
      </ViewportProvider>
    </div>
  )
}
