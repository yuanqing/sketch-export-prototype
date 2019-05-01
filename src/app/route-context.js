import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef
} from 'react'

export { RouteProvider, useRoute }

const RouteContext = createContext()

const ROUTE_TO = 'ROUTE_TO'
const ROUTE_BACK = 'ROUTE_BACK'
const ROUTE_FORWARD = 'ROUTE_FORWARD'

function reducer (state, action) {
  const { routeHistory, currentRouteIndex } = state
  const { route, animationType } = action
  switch (action.type) {
    case ROUTE_TO:
      return {
        routeHistory: [
          ...routeHistory.slice(0, currentRouteIndex + 1),
          { route, animationType }
        ],
        currentRouteIndex: currentRouteIndex + 1
      }
    case ROUTE_BACK:
      return {
        routeHistory: [...routeHistory],
        currentRouteIndex: currentRouteIndex - 1
      }
    case ROUTE_FORWARD:
      return {
        routeHistory: [...routeHistory],
        currentRouteIndex: currentRouteIndex + 1
      }
    default:
      throw new Error(`Unsupported action type: ${action.type}`)
  }
}

function RouteProvider (props) {
  const indices = useRef({
    index: 0,
    currentStateIndex: -1
  })
  const { initialRoute, ...rest } = props
  const initialState = {
    routeHistory: [{ route: initialRoute, animationType: null }],
    currentRouteIndex: 0
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { routeHistory, currentRouteIndex } = state
  const currentRoute = routeHistory[currentRouteIndex]
  const previousRoute =
    currentRouteIndex > 0 ? routeHistory[currentRouteIndex - 1] : null
  const getPageStack = useCallback(
    function () {
      return routeHistory.slice(0, currentRouteIndex + 1)
    },
    [routeHistory, currentRouteIndex]
  )
  const value = useMemo(
    function () {
      return {
        previousRoute,
        currentRoute,
        getPageStack,
        routeBack: function () {
          window.history.back()
        },
        routeForward: function () {
          window.history.forward()
        },
        routeTo: function ({ route, animationType }) {
          const index = indices.current.index
          window.history.pushState({ index }, null, `#${route}`)
          indices.current.currentStateIndex = index
          indices.current.index = index + 1
          dispatch({ type: ROUTE_TO, route, animationType })
        }
      }
    },
    [previousRoute, currentRoute, getPageStack]
  )
  useEffect(
    function () {
      function handlePopState (event) {
        const currentStateIndex = indices.current.currentStateIndex
        const newStateIndex = event.state == null ? -1 : event.state.index
        if (newStateIndex < currentStateIndex) {
          dispatch({ type: ROUTE_BACK })
          indices.current.currentStateIndex = newStateIndex
          return
        }
        if (newStateIndex > currentStateIndex) {
          dispatch({ type: ROUTE_FORWARD })
          indices.current.currentStateIndex = newStateIndex
        }
      }
      window.addEventListener('popstate', handlePopState)
      return function () {
        window.removeEventListener('popstate', handlePopState)
      }
    },
    [state]
  )
  return <RouteContext.Provider value={value} {...rest} />
}

function useRoute () {
  const context = useContext(RouteContext)
  if (!context) {
    throw new Error('`useRoute` must be used within a `RouteProvider`')
  }
  return context
}
