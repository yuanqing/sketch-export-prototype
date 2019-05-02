import React, { useEffect } from 'react'
import { TransitionGroup } from 'react-transition-group'

import Page from './page'
import { useRoute } from '../route-context'
import { useViewport } from '../viewport-context'

export default function Pages ({ data }) {
  const { viewportWidth, viewportHeight } = useViewport()
  const { currentRoute, getPageStack } = useRoute()
  const pageStack = getPageStack()
  useEffect(
    function () {
      document.title = data[currentRoute.route].title
    },
    [currentRoute]
  )
  return (
    <TransitionGroup>
      {pageStack.map(function ({ route, animationType }, index) {
        const props = {
          key: `${route}-${animationType}-${index}`,
          data: data[route],
          animationType,
          viewportWidth,
          viewportHeight
        }
        return <Page {...props} />
      })}
    </TransitionGroup>
  )
}
