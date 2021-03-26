import React from 'react'
import '../../styles/app/components/ContainerTwo/TitleDesigned.css';

export const TitleDesigned = () => {

    const widthScreen = window.screen.width;

    return (
        <>
            <h2 className='Designed' style={widthScreen <= 980 ? {marginRight: '0',
            fontSize: '7vw', marginTop: '20vw', marginBottom: '10vw'} : null}> 
            Designed for the future
            </h2>
        </>
    )
}

export default TitleDesigned;
