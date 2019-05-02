import React, { useEffect } from 'react'
import { TransitionGroup } from 'react-transition-group'

import Artboard from './artboard'
import { useRoute } from '../route-context'
import { useViewport } from '../viewport-context'

export default function Artboards ({ getArtboardById }) {
  const { viewportWidth, viewportHeight } = useViewport()
  const { currentRoute, getPageStack } = useRoute()
  const pageStack = getPageStack()
  useEffect(
    function () {
      document.title = getArtboardById(currentRoute.route).name
    },
    [currentRoute]
  )
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
  return (
    <div style={style}>
      <TransitionGroup>
        {pageStack.map(function ({ route, animationType }, index) {
          const props = {
            key: `${route}-${animationType}-${index}`,
            data: getArtboardById(route),
            animationType,
            viewportWidth,
            viewportHeight
          }
          return <Artboard {...props} />
        })}
      </TransitionGroup>
    </div>
  )
}
