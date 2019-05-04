import React from 'react'

import DropdownArrow from '../icons/dropdown-arrow'
import style from './select-box.scss'

export default function SelectBox ({ children, value, onChange }) {
  return (
    <div className={style.root}>
      <select className={style.select} value={value} onChange={onChange}>
        {children}
      </select>
      <div className={style.dropdownArrow}>
        <DropdownArrow />
      </div>
    </div>
  )
}
