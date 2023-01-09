import React from 'react'
import { useParams } from 'react-router-dom'

function Display_categories() {
  const{id}=useParams()
  return (
    <div>Display_categories{id}</div>
  )
}

export default Display_categories