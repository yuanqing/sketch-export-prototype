import React from 'react'
import { Transition } from 'react-transition-group'

import HotspotLayers from './hotspot-layers'
import FixedLayers from './fixed-layers'

const transitionStyles = {
  none: {
    duration: 200,
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 }
  },
  slideFromRight: {
    duration: 300,
    entering: { left: '100%' },
    entered: { left: '0%' },
    exiting: { left: '0%' },
    exited: { left: '100%' }
  },
  slideFromBottom: {
    duration: 300,
    entering: { top: '100%' },
    entered: { top: '0%' },
    exiting: { top: '0%' },
    exited: { top: '100%' }
  }
}

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
    top: 0,
    left: 0,
    width: viewportWidth,
    height: viewportHeight,
    backgroundColor: '#fff',
    transition: `all ${duration}ms ease`
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
      width: image.width,
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
