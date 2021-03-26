import React, { useContext }from 'react'
import { GlobalContext } from '../../Context/GlobalContext';

export const Logo = () => {
    const { widthScreen } = useContext(GlobalContext);


    return (
       
        <img src='images/logo.svg' alt='logo' style={widthScreen > 980 ? {width: '8vw'} : {width: '20vw'}} />
       
    )
}
 
export default Logo;