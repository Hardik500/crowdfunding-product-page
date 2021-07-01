import './style.scss';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import { ReactComponent as HamburgerOpenMenu } from '../../assets/images/icon-hamburger.svg';
import { ReactComponent as HamburgerCloseMenu } from '../../assets/images/icon-close-menu.svg';
import { ReactComponent as LogoComponent } from '../../assets/images/logo.svg';

export default function Navbar() {
    const [menuActive, toggleMenu] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1440px)' })

    if(isTabletOrMobile){
        return (
            <>
                <div className="nav-menu-container">
                    <LogoComponent />
                    {menuActive ? <HamburgerCloseMenu onClick={() => toggleMenu(!menuActive)} /> : <HamburgerOpenMenu onClick={() => toggleMenu(!menuActive)} />}
                </div>
                <div className={`nav-menu-items ${menuActive ? 'active' : ''}`}>
                    <div className="nav-menu-item">About</div>
                    <div className="nav-menu-item">Discover</div>
                    <div className="nav-menu-item">Get Started</div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="nav-menu-container">
                <LogoComponent />
                <div className={`nav-menu-items ${menuActive ? 'active' : ''}`}>
                    <div className="nav-menu-item">About</div>
                    <div className="nav-menu-item">Discover</div>
                    <div className="nav-menu-item">Get Started</div>
                </div>
            </div>
        </>       
    )
}