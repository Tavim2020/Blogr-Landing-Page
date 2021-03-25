import React from 'react';
import '../../styles/app/components/ContainerTop/Header/Menu.css';

export const Menu = () => {
    const [isActiveMenu, setIsActiveMenu] = React.useState(false);
    const [isActiveMenuTwo, setIsActiveMenuTwo] = React.useState(false);
    const [isActiveMenuTree, setIsActiveMenuTree] = React.useState(false);

    function AtualizandoPrimeiroMenu(){
        setIsActiveMenu(!isActiveMenu);
    }
    function AtualizandoSegundoMenu(){
        setIsActiveMenuTwo(!isActiveMenuTwo);
    }

    function AtualizandoTerceiroMenu(){
        setIsActiveMenuTree(!isActiveMenuTree);
    }
   
    return (
   

    
        <nav>
            <ul>
                <div id="0"className='menu'>
                    
                    <div  className='showMenu'>

                        <li onClick={AtualizandoPrimeiroMenu}>Product</li>

                        <img className={isActiveMenu && 'activeMenu'} onClick={AtualizandoPrimeiroMenu} src='images/setaMenu.svg' alt='Show Menu'/>

                    </div>

                    {isActiveMenu && 
                    <div className='menuList'>
                        <ul>
                            <li> Overview</li>
                            <li>Pricing</li>
                            <li>Marketplace</li>
                            <li>Features</li>
                            <li>Integrations</li>
                        </ul>
                    </div>}

                </div>

                <div className='menu' id="1">


                     <div className='showMenu'>
                        <li onClick={AtualizandoSegundoMenu}> Company</li>
                        <img className={isActiveMenuTwo && 'activeMenu'} onClick={AtualizandoSegundoMenu}src='images/setaMenu.svg' alt='Show Menu'/>
                    </div>

                    {isActiveMenuTwo &&
                    <div className='menuList'>
                        <ul>
                            <li> About</li>
                            <li>Team</li>
                            <li>Blog</li>
                            <li>Careers</li>
                        </ul>
                    </div>}

                </div>

                <div id="2"className='menu'>


                     <div className='showMenu'>
                        <li onClick={AtualizandoTerceiroMenu}>Connect</li>
                        
                        <img className={isActiveMenuTree && 'activeMenu'} 
                            onClick={AtualizandoTerceiroMenu}
                            src='images/setaMenu.svg' alt='Show Menu'/>
                    </div>

                    {isActiveMenuTree &&
                    <div className='menuList'>
                        <ul>
                            <li>Contact</li>
                            <li>Newsletter</li>
                            <li> LinkedIn</li>
                        </ul>
                    </div>}

                </div>
            </ul>
        </nav>
    )
}

export default Menu;