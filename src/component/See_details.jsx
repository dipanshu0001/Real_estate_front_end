import React from 'react'
import { useParams } from 'react-router-dom'

function See_details() {
  const{id}=useParams()
  return (
    <div>Helloe{id}</div>
  )
}

export default See_details