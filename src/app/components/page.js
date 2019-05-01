import React from 'react'
import { Transition } from 'react-transition-group'

import HotspotLayers from './hotspot-layers'
import FixedLayers from './fixed-layers'
import transitionStyles from './transition-styles'

export default function Page ({
  in: inProp,
  data,
  animationType,
  viewportWidth,
  viewportHeight
}) {
  const { image, hotspotLayers, fixedLayers } = data
  const duration = transitionStyles[animationType]
    ? transitionStyles[animationType].duration
    : 0
  const transitionProps = {
    in: inProp,
    timeout: duration
  }
  const style = {
    position: 'absolute',
    width: viewportWidth,
    height: viewportHeight,
    transition: `all ${duration}ms ease`,
    backgroundColor: '#fff'
  }
  const scrollableProps = {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: -100, // hide the scrollbar
      overflow: 'auto'
    }
  }
  const imgProps = {
    src: image.fileName,
    style: {
      display: 'block',
      width: 375,
      height: image.height
    }
  }
  const fixedLayersProps = {
    data: fixedLayers,
    pageHeight: image.height
  }
  return (
    <Transition {...transitionProps}>
      {function (state) {
        return (
          <div
            style={{
              ...style,
              ...(transitionStyles[animationType]
                ? transitionStyles[animationType][state]
                : [])
            }}
          >
            <div {...scrollableProps}>
              <img {...imgProps} />
              <HotspotLayers data={hotspotLayers} />
            </div>
            <FixedLayers {...fixedLayersProps} />
          </div>
        )
      }}
    </Transition>
  )
}
