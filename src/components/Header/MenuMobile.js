import React from 'react'
import '../../styles/app/components/ContainerTop/Header/MenuMobile.css'

export const MenuMobile = () => {

    const [OpenClickOpen, setOpenClickOpen] = React.useState(false);
    const [OpenClickOpenTwo, setOpenClickOpenTwo] = React.useState(false);
    const [OpenClickOpenTree, setOpenClickOpenTree] = React.useState(false);

    function OpenHide(){
        setOpenClickOpen(!OpenClickOpen);
    }

    function OpenHideTwo(){
        setOpenClickOpenTwo(!OpenClickOpenTwo);
    }

    function OpenHideTree(){
        setOpenClickOpenTree(!OpenClickOpenTree);
    }

    return (
        <div className='phaterMenu'>

            <div className='MenuMobile'>
                
                <div>

                    <div className='OpenMenu'>

                        <div className='show'>

                            <p onClick={OpenHide}>Product</p>
                            <img onClick={OpenHide} 
                            src='images/icon-arrow-dark.svg' 
                            alt='Arrow Open/Close' 
                            style={OpenClickOpen ? { transform: 'rotateX(180deg)' } : null}/>

                        </div>
                        {OpenClickOpen && (
                        <div className='clickOpen'>
                            <ul>
                                <li> Overview</li>
                                <li>Pricing</li>
                                <li>Marketplace</li>
                                <li>Features</li>
                                <li>Integrations</li>
                            </ul>
                        </div>)}

                    </div>

                    <div className='OpenMenu'>

                        <div className='show'>

                            <p onClick={OpenHideTwo}>Company</p>
                            <img onClick={OpenHideTwo} 
                            src='images/icon-arrow-dark.svg' 
                            alt='Arrow Open/Close' 
                            style={OpenClickOpenTwo ? { transform: 'rotateX(180deg)' } : null}/>

                        </div>
                        {OpenClickOpenTwo && (
                        <div className='clickOpen'>
                            <ul>
                                <li>About</li>
                                <li>Team</li>
                                <li>Blog</li>
                                <li>Careers</li>
                            </ul>
                        </div>)}
                        
                    </div>

                    <div className='OpenMenu'>

                        <div className='show'>

                            <p onClick={OpenHideTree} >Connect</p>
                            <img onClick={OpenHideTree} 
                            src='images/icon-arrow-dark.svg' 
                            alt='Arrow Open/Close' 
                            style={OpenClickOpenTree ? { transform: 'rotateX(180deg)' } : null}/>

                        </div>
                        
                        {OpenClickOpenTree && (
                        <div className='clickOpen'>
                            <ul>
                                <li>Contact</li>
                                <li>Newsletter</li>
                                <li> LinkedIn</li>
                            </ul>
                        </div>)}

                    </div>

                </div>


                <div className='loginMenuContainer'>

                    <div className='loginMenu'>

                        <p>Login</p>

                    </div>

                    <div className='cadastroMenu'>

                        <p>Sing Up</p>

                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default MenuMobile;
