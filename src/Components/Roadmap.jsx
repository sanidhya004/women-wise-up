import React, { useRef } from 'react'
import {useParams} from 'react-router-dom'

export const Roadmap = () => {
    const params = useParams();
  return (
    <div>{params.id}</div>
  )
}
