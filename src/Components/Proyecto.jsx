import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    const params = useParams();

    //Con los corchetes solo se ejecuta el useEffect cuando se carga el componente
    useEffect (() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]); //le pasamos el proyecto seleccionado
    }, []);

    return (
        <div className='page page-work'>
            <div className="page_content">              
                <h1 className='heading'> {proyecto.nombre} </h1>
                <p>{proyecto.tecnologias}</p>
                <p>{proyecto.descripcion}</p>
                <a href={proyecto.url} target="_blank">Ir al proyecto</a>
            </div>
            <div className="mask">
                <img src={"../../images/"+proyecto.id + ".jpg"} alt="" />
            </div>
        </div>
    )
}
