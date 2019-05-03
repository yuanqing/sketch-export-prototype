import React from 'react'
import classNames from '@sindresorhus/class-names'

export default function NavigationButton ({ children, onClick }) {
  const className = classNames(
    'NavigationButton',
    onClick && 'NavigationButton--enabled'
  )
  return (
    <div className={className} onClick={onClick}>
      <div className={'NavigationButton-inner'}>{children}</div>
    </div>
  )
}
