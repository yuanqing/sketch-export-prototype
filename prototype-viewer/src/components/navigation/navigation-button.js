import React from 'react'
import classNames from '@sindresorhus/class-names'

import style from './navigation-button.scss'

export default function NavigationButton ({ children, onClick }) {
  const className = classNames(style.root, onClick && style.enabled)
  return (
    <div className={className} onClick={onClick}>
      <div className={style.inner}>{children}</div>
    </div>
  )
}
