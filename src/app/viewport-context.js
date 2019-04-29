import React, { createContext, useContext } from 'react'

export { ViewportProvider, useViewport }

const ViewportContext = createContext()

function ViewportProvider (props) {
  const { viewportWidth, viewportHeight, ...rest } = props
  return (
    <ViewportContext.Provider
      value={{ viewportWidth, viewportHeight }}
      {...rest}
    />
  )
}

function useViewport () {
  const context = useContext(ViewportContext)
  if (!context) {
    throw new Error('`useViewport` must be used within a `ViewportProvider`')
  }
  return context
}
