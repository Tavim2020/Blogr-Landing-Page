import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';

export const ImageDesktop = () => {

    const { widthScreen } = useContext(GlobalContext);

    return (
        <>
            <img src={widthScreen > 980 ? 'images/desktop.svg' : 'images/laptopMobile.svg'} alt='Desktop' style={widthScreen > 980 ? { width: '65vw', 
            marginLeft: '-18.5%'} : { margin: '0 auto', width: '100vw', marginTop: '5vw'}}/>
        </>
    )
}

export default ImageDesktop;