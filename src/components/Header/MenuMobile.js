import React from 'react'
import '../../styles/app/components/ContainerTop/Header/MenuMobile.css'

export const MenuMobile = () => {
    return (
        <div className='MenuMobile'>

            <div>

                <div className='OpenMenu'>

                    <div className='show'>

                        <p>Product</p>
                        <img src='images/icon-arrow-dark.svg' alt='Arrow Open/Close' />

                    </div>
                    <div className='clickOpen'></div>

                </div>

                <div className='OpenMenu'>

                    <div className='show'>

                        <p>Company</p>
                        <img src='images/icon-arrow-dark.svg' alt='Arrow Open/Close' />

                    </div>
                    <div className='clickOpen'></div>
                    
                </div>

                <div className='OpenMenu'>

                    <div className='show'>

                        <p>Connect</p>
                        <img src='images/icon-arrow-dark.svg' alt='Arrow Open/Close' />

                    </div>
                    <div className='clickOpen'></div>
                    
                </div>

            </div>


            <div className='loginMenu'>

                <div className='loginMenu'>

                    <p>Login</p>

                </div>

                <div className='cadastroMenu'>

                    <p>Sing Up</p>

                </div>

            </div>
            
        </div>
    )
}

export default MenuMobile;
