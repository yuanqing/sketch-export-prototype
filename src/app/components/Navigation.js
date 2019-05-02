import React, { useCallback } from 'react'
import { useRoute } from '../route-context'

export default function Navigation ({ data }) {
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
  })
  return (
    <div>
      <button disabled={previousRoute === null} onClick={routeBack}>
        ←
      </button>
      <button disabled={nextRoute === null} onClick={routeForward}>
        →
      </button>
      <select value={currentRoute.route} onChange={handleOnChange}>
        {Object.keys(data).map(function (id) {
          return (
            <option key={id} value={id}>
              {data[id].title}
            </option>
          )
        })}
      </select>
    </div>
  )
}
