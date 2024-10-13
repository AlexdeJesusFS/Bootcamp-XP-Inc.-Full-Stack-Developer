import React from 'react'
import './style.css'

export default function ListItem({title, description}) {
  return (
    <div className='list-item'>
      <strong>{title}</strong>
      <p>{description}</p>
      <hr/>
    </div>
  )
}
