import React from 'react'

export const Contacto = () => {
  return (
    <div className='contacto'>
      <h1 className='heading'>Contacto</h1>
      <form className='contact' action='mailto:bgamboaa98@gmail.com'>
        <input type="text" placeholder='Nombre'/>
        <input type="text" placeholder='Apellidos'/>
        <input type="text" placeholder='Email'/>
        <textarea placeholder='Motivo de contacto'></textarea>
        <button>Enviar</button>
      </form>
    </div>
  )
}
