import React from 'react'
import DropdownArrow from './icons/dropdown-arrow'

export default function SelectBox ({ children, value, onChange }) {
  return (
    <div className='SelectBox'>
      <select className='SelectBox-selectBox' value={value} onChange={onChange}>
        {children}
      </select>
      <div className='SelectBox-arrow'>
        <DropdownArrow />
      </div>
    </div>
  )
}
