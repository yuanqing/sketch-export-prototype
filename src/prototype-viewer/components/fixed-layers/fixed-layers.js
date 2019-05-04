import React from 'react'

import FixedLayer from './fixed-layer'
import { useViewport } from '../../contexts/viewport-context'

export default function FixedLayers ({ children, artboardHeight }) {
  const { viewportHeight } = useViewport()
  return children
    .map(function (fixedLayer, index) {
      return (
        <FixedLayer
          key={index}
          artboardHeight={artboardHeight}
          viewportHeight={viewportHeight}
        >
          {fixedLayer}
        </FixedLayer>
      )
    })
    .filter(Boolean)
}
