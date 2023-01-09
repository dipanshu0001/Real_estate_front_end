import React from 'react'
import { useParams } from 'react-router-dom'

function Agent_detail() {
    const {id}=useParams()
  return (
    <div>Agent_detail{id}</div>
  )
}

export default Agent_detail