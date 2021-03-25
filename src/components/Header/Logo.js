import React from 'react'

export const Logo = () => {
    const widthScreen = window.screen.width;
    return (
       
        <img src='images/logo.svg' alt='logo' style={widthScreen > 980 ? {width: '8vw'} : {width: '14vw'}} />
       
    )
}
 
export default Logo;