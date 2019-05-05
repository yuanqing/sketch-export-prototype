import React, { useCallback } from 'react'

import ArrowLeft from '../icons/arrow-left'
import ArrowRight from '../icons/arrow-right'
import NavigationButton from './navigation-button'
import SelectBox from './select-box'
import { useRoute } from '../../contexts/route-context'
import style from './navigation.scss'

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
  const handleClick = useCallback(function (event) {
    event.stopPropagation()
  }, [])
  const innerStyle = {
    width: viewportWidth
  }
  return (
    <div className={style.root} onClick={handleClick}>
      <div className={style.inner} style={innerStyle}>
        <NavigationButton onClick={previousRoute && handleBackButtonOnClick}>
          <ArrowLeft />
        </NavigationButton>
        <NavigationButton onClick={nextRoute && handleForwardButtonOnClick}>
          <ArrowRight />
        </NavigationButton>
        <div className={style.selectBox}>
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
    </div>
  )
}
