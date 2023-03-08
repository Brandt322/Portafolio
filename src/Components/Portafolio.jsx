import React from 'react'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Portafolio = () => {
  return (
    <div className='portafolio'>
      <h1 className='heading'>Portafolio</h1>
      <div className="works">
      <ListadoTrabajos/>
      </div>
    </div>
  )
}
