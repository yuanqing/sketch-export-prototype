import React, { useCallback } from 'react'

import ArrowLeft from './icons/arrow-left'
import ArrowRight from './icons/arrow-right'
import NavigationButton from './navigation-button'
import SelectBox from './select-box'

import { useRoute } from '../../route-context'

const EN_SPACE = '\u2002'

export default function Navigation ({ pages, viewportWidth }) {
  const {
    currentRoute,
    previousRoute,
    nextRoute,
    routeBack,
    routeForward,
    routeTo
  } = useRoute()
  const handleOnChange = useCallback(function (event) {
    routeTo({ route: event.target.value, animationType: 'appear' })
  }, [])
  const handleBackButtonOnClick = useCallback(function () {
    routeBack()
  }, [])
  const handleForwardButtonOnClick = useCallback(function () {
    routeForward()
  }, [])
  const rootStyle = {
    width: viewportWidth,
    marginLeft: Math.floor(viewportWidth / 2) * -1
  }
  return (
    <div className='Navigation' style={rootStyle}>
      <NavigationButton onClick={previousRoute && handleBackButtonOnClick}>
        <ArrowLeft />
      </NavigationButton>
      <NavigationButton onClick={nextRoute && handleForwardButtonOnClick}>
        <ArrowRight />
      </NavigationButton>
      <div className='Navigation-selectBox'>
        <SelectBox value={currentRoute.route} onChange={handleOnChange}>
          {pages.map(function (page) {
            return (
              <optgroup key={page.id} label={page.name}>
                {page.artboards.map(function (artboard) {
                  return (
                    <option key={artboard.id} value={artboard.id}>
                      {artboard.isStartPoint ? '⚑' : `${EN_SPACE}`}{' '}
                      {artboard.name}
                    </option>
                  )
                })}
              </optgroup>
            )
          })}
        </SelectBox>
      </div>
    </div>
  )
}
