import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';


export const FooterLogo = () => {

    const { widthScreen } = useContext(GlobalContext);

    return (
        <>
            <img src='images/logo.svg' alt='Logo' style={widthScreen > 980 ? { width: '8vw', 
            marginTop: '7.4vw', marginLeft: '12vw'} : {width: '18vw', 
            marginTop: '20vw'}} />
        </>
    )
}

export default FooterLogo;
