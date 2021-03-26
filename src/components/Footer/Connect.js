import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import '../../styles/app/components/Footer/Connect.css';

export const Connect = () => {

    const { widthScreen } = useContext(GlobalContext);

    return (
        <div className='Connect' style={widthScreen <= 980 ? { marginLeft: '0', width: '100vw'} : null}>

        <h5 style={widthScreen <= 980 ? {fontSize: '5vw', textAlign: 'center'} : null}>Connect</h5>
         
        <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                Contact 
                <span></span>
        </p>


        <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                Newsletter
                <span></span>
        </p>


        <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                LinkedIn
                <span></span>
        </p>

    </div>
    )
}

export default Connect;