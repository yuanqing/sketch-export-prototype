import React, {
  useCallback,
  createContext,
  useContext,
  useRef,
  useState
} from 'react'

import style from './hotspot-visibility-context.scss'

export { HotspotVisibilityProvider, useHotspotVisibility }

const HotspotVisibilityContext = createContext()

function HotspotVisibilityProvider ({ showHotspots, children, rest }) {
  if (!showHotspots) {
    return (
      <HotspotVisibilityContext.Provider value={{ isVisible: false }} {...rest}>
        <div>{children}</div>
      </HotspotVisibilityContext.Provider>
    )
  }
  const [isVisible, setVisibility] = useState(false)
  const timeout = useRef()
  const handleClick = useCallback(function () {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    setVisibility(true)
    timeout.current = setTimeout(function () {
      setVisibility(false)
      timeout.current = null
    }, 500)
  })
  return (
    <HotspotVisibilityContext.Provider value={{ isVisible }} {...rest}>
      <div className={style.root} onClick={handleClick}>
        {children}
      </div>
    </HotspotVisibilityContext.Provider>
  )
}

function useHotspotVisibility () {
  const context = useContext(HotspotVisibilityContext)
  if (!context) {
    throw new Error(
      '`useHotspotVisibility` must be used within a `HotspotVisibilityProvider`'
    )
  }
  return context
}
