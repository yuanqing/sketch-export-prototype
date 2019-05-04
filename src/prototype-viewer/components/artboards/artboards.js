import React, { useEffect } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Artboard from './artboard'
import { useRoute } from '../../contexts/route-context'
import { useViewport } from '../../contexts/viewport-context'
import { HotspotVisibilityProvider } from '../../contexts/hotspot-visibility-context'
import style from './artboards.scss'

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
    <div className={style.root} style={artboardsStyle}>
      <HotspotVisibilityProvider>
        <TransitionGroup>
          {pageStack.map(function ({ route, animationType }, index) {
            const classNames = getClassNames({ style, animationType })
            return (
              <CSSTransition
                classNames={classNames}
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
      </HotspotVisibilityProvider>
    </div>
  )
}

const states = ['enter', 'enterActive', 'exit', 'exitActive']

function getClassNames ({ style, animationType }) {
  const result = {}
  states.forEach(function (state) {
    result[state] = style[`${animationType}--${state}`]
  })
  return result
}
