import './style.scss';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive'


import { useFunds } from '../Context/FundProvider';

import { ReactComponent as HamburgerOpenMenu } from '../../assets/images/icon-hamburger.svg';
import { ReactComponent as HamburgerCloseMenu } from '../../assets/images/icon-close-menu.svg';
import { ReactComponent as LogoComponent } from '../../assets/images/logo.svg';

export default function Navbar() {
    const [menuActive, toggleMenu] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1440px)' })
    const { toggleSupportModal } = useFunds();

    if(isTabletOrMobile){
        return (
            <>
                <div className="nav-menu-container">
                    <LogoComponent />
                    {menuActive ? <HamburgerCloseMenu onClick={() => toggleMenu(!menuActive)} /> : <HamburgerOpenMenu onClick={() => toggleMenu(!menuActive)} />}
                </div>
                <div className={`nav-menu-items ${menuActive ? 'active' : ''}`} onClick={() => {toggleMenu(!menuActive)}}>
                    <a href="#about" className="nav-menu-item">About</a>
                    <hr style={{border: 0, borderTop: '1px solid #F2F2F2'}}/>
                    <a href="#discover" className="nav-menu-item">Discover</a>
                    <hr style={{border: 0, borderTop: '1px solid #F2F2F2'}}/>
                    <a href="#getStarted" onClick={() => toggleSupportModal(true)} className="nav-menu-item">Get Started</a>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="nav-menu-container">
                <LogoComponent />
                <div className='nav-menu-items'>
                    <a href="#about" className="nav-menu-item">About</a>
                    <a href="#discover" className="nav-menu-item">Discover</a>
                    <a href="#getStarted" onClick={toggleSupportModal} className="nav-menu-item">Get Started</a>
                </div>
            </div>
        </>       
    )
}