import React, { useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
  const artboardsStyle = {
    marginTop: Math.floor(viewportHeight / 2) * -1,
    marginLeft: Math.floor(viewportWidth / 2) * -1,
    width: viewportWidth,
    height: viewportHeight
  }
  return (
    <div className='Artboards' style={artboardsStyle}>
      <TransitionGroup>
        {pageStack.map(function ({ route, animationType }, index) {
          return (
            <CSSTransition
              classNames={`Artboards-artboard--${animationType}`}
              key={`${route}-${animationType}-${index}`}
              timeout={animationType === 'appear' ? 200 : 400}
            >
              <Artboard
                artboard={getArtboardById(route)}
                animationType={animationType}
                viewportWidth={viewportWidth}
                viewportHeight={viewportHeight}
              />
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </div>
  )
}
