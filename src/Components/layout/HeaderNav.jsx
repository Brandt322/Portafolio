import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {

    const [btnState, setBtnState] = useState(false);

    const desplegar = () => {
        setBtnState(btnState => !btnState); //cambia de false a verdadero y viceversa
        console.log(btnState)
    }

    let btnActive = btnState ? 'active' : "";

    return (
        <header className='header'>
            <div className="logo">
                <span>B</span>
                <h3>Brandon Gamboa Web</h3>
            </div>
            <button className="toogle" onClick={desplegar}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <nav>
                <ul className={btnActive}>
                    <li>
                        <NavLink 
                            to="/inicio" 
                            className={({isActive}) => isActive ? "active" : ""}
                            >
                                Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/portafolio" 
                            className={({isActive}) => isActive ? "active" : ""}
                            >
                                Portafolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/servicios" 
                            className={({isActive}) => isActive ? "active" : ""}
                            >
                                Servicios
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/curriculum" 
                            className={({isActive}) => isActive ? "active" : ""}
                            >
                                Curriculum
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/contacto" 
                            className={({isActive}) => isActive ? "active" : ""}
                            >
                                Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
