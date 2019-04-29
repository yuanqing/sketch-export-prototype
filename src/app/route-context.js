import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer
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
  const routeTo = useCallback(function ({ route, animationType }) {
    dispatch({ type: ROUTE_TO, route, animationType })
    window.location.hash = route
  }, [])
  const routeBack = useCallback(function () {
    dispatch({ type: ROUTE_BACK })
    window.history.back()
  }, [])
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
        routeBack,
        routeTo
      }
    },
    [previousRoute, currentRoute]
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
