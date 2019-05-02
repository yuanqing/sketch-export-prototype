import React, { useCallback } from 'react'
import { useRoute } from '../route-context'

const EN_SPACE = '\u2002'

export default function Navigation ({ pages }) {
  const {
    currentRoute,
    previousRoute,
    nextRoute,
    routeBack,
    routeForward,
    routeTo
  } = useRoute()
  const handleOnChange = useCallback(function (event) {
    routeTo({ route: event.target.value, animationType: 'none' })
  }, [])
  const handleBackButtonOnClick = useCallback(function () {
    routeBack()
  }, [])
  const handleForwardButtonOnClick = useCallback(function () {
    routeForward()
  }, [])
  const optionElements = []
  pages.forEach(function (page) {
    optionElements.push(
      <option key={page.id} disabled={true}>
        {page.name}
      </option>
    )
    page.artboards.forEach(function (artboard) {
      optionElements.push(
        <option key={artboard.id} value={artboard.id}>
          {artboard.isStartPoint ? '⚑' : `${EN_SPACE}`}
          {'  '}
          {artboard.name}
        </option>
      )
    })
  })
  return (
    <div>
      <button
        disabled={previousRoute === null}
        onClick={handleBackButtonOnClick}
      >
        ←
      </button>
      <button
        disabled={nextRoute === null}
        onClick={handleForwardButtonOnClick}
      >
        →
      </button>
      <select value={currentRoute.route} onChange={handleOnChange}>
        {optionElements}
      </select>
    </div>
  )
}
