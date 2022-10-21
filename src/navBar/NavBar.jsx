import React from 'react'
import { CardWidget } from '../cardWidget,js/CardWidget';
import './navBar.css'
import { NavLink } from "react-router-dom";


export const NavBar = () => {
    return (
        <div className='containerNavBar'> 
            <div className="logo">
                <img src="" alt="logo" />
            </div>
            <div className="enlaces">
                <NavLink to='/home' className={({isActive})=>isActive === true ? 'claseActiva itemEnlace':'claseInactiva itemEnlace'}>Inicio</NavLink>
                {/* <NavLink to='/about' className={({isActive})=>isActive === true ? 'claseActiva itemEnlace':'claseInactiva itemEnlace'}>Acerca de Nosotros</NavLink> */}
                {/* <NavLink to='/contact' className={({isActive})=>isActive === true ? 'claseActiva itemEnlace':'claseInactiva itemEnlace'}>Contactanos</NavLink> */}
                <NavLink to='/product/camisas' className={({isActive})=>isActive === true ? 'claseActiva itemEnlace':'claseInactiva itemEnlace'}>Camisas</NavLink>
                <NavLink to='/product/pantalon' className={({isActive})=>isActive === true ? 'claseActiva itemEnlace':'claseInactiva itemEnlace'}>Pantalones</NavLink>
                <NavLink to='/product/zapatos' className={({isActive})=>isActive === true ? 'claseActiva itemEnlace':'claseInactiva itemEnlace'}>Zapatos</NavLink>
            </div>
            <div className="extra">
                <CardWidget />
            </div>
            
        </div>
    );
}
