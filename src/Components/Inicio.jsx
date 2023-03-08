import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, soy <strong>Brandon Gamboa</strong> y soy estudiante de Ingenieria de Software y tambien <strong>desarrollador junior front-end.</strong>
      </h1>
      <h2 className='tittle'>
        Me apasiona aprender tecnologias para el desarrollo de sitios o aplicaciones web.
      </h2>
      <Link className='link' to="/contacto">Contacta conmigo</Link>
      <section>
        <h2 className='heading'>Ultimos proyectos personales realizados</h2>
        <div>
          <ListadoTrabajos limite="2" />
        </div>
      </section>
    </div>
  )
}
