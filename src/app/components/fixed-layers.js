import React from 'react'

import FixedLayer from './fixed-layer'
import { useViewport } from '../viewport-context'

export default function FixedLayers ({ data, pageHeight }) {
  const { viewportHeight } = useViewport()
  return data
    .map(function (fixedLayer, index) {
      const props = {
        key: index,
        data: fixedLayer,
        pageHeight,
        viewportHeight
      }
      return <FixedLayer {...props} />
    })
    .filter(Boolean)
}
