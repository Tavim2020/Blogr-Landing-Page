import React, { useContext } from 'react';
import '../../styles/app/components/ContainerTop/Header/Header.css';
import Menu from './Menu';
import Logo from './Logo';
import Login from './Login';
import MenuMobile from './MenuMobile';
import { GlobalContext } from '../../Context/GlobalContext';

function Header(){
    const { widthScreen } = useContext(GlobalContext);
    const [menu, setMenu] = React.useState(false);

    function MenuOpenMobile(){
        setMenu(!menu);
    }


    return (
        <header style={widthScreen <= 980 ? {marginTop: '15vw'} : null}>
            <div className='half'>
                <Logo />
                 {widthScreen > 980 ? <Menu />  : null}
            </div>

            <div className='otherHalf'>
                {widthScreen > 980 ? <Login /> : null}
                {widthScreen <= 980 ? <img onClick={MenuOpenMobile} style={{ width: '8vw'}} 
                src={menu ? 'images/icon-close.svg' : 'images/icon-hamburger.svg'} alt='Menu' /> : null} 
            </div>


            {menu && <MenuMobile /> }

        </header>
    );
}

export default Header;