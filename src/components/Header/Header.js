import React from 'react';
import '../../styles/app/components/ContainerTop/Header/Header.css';
import Menu from './Menu';
import Logo from './Logo';
import Login from './Login';
import MenuMobile from './MenuMobile';

function Header(){
    const widthScreen = window.screen.width;
    const [menu, setMenu] = React.useState(false);

    function MenuOpenMobile(){
        setMenu(!menu);
    }


    return (
        <header>
            <div className='half'>
                <Logo />
                 {widthScreen > 980 ? <Menu />  : null}
            </div>

            <div className='otherHalf'>
                {widthScreen > 980 ? <Login /> : null}
                {widthScreen <= 980 ? <img onClick={MenuOpenMobile} style={{ width: '5vw'}} 
                src={menu ? 'images/icon-close.svg' : 'images/icon-hamburger.svg'} alt='Menu' /> : null} 
            </div>


            {menu && <MenuMobile /> }

        </header>
    );
}

export default Header;