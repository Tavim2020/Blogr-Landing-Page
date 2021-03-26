import React from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import '../../styles/app/components/ContainerTop/ContainerTextAndButton/Text.css';
import { useContext } from 'react';

export const Text = () => {
    const { widthScreen } = useContext(GlobalContext);
    
    return (
        <>
            <h1 className='h1' style={widthScreen <= 980 ? {marginTop: '18vw', fontSize: '8vw', 
            textAlign: 'center'} : null}>  
                A modern{widthScreen < 980 && <br></br>} publishing platform
            </h1>

            <h3 className='h3'style={widthScreen <= 980 ? {marginTop: '3vw', width: '70%', 
            fontSize: '4vw', textAlign: 'center', color: '#fff'} : null}>
                Grow your audience and build your online brand
            </h3>
        </>
    )
}

export default Text;
