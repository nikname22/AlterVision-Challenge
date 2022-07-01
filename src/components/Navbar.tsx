import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../styles/Navbar.css';


function Navbar() {
    const [sidebar, setSidebar] = useState<boolean>(false);
    const [hamburguer, setHamburguer] = useState<boolean>(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
        setHamburguer(!hamburguer)
    };
    

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <div className='hamburguer' onClick={showSidebar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <div className={hamburguer ? 'hamburguer active' : 'hamburguer'}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </li>
                    {SidebarData.map((item: any, index: number) => {
                        return (
                            <li key={index} className={item.cName} id={item.id}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}

export default Navbar;