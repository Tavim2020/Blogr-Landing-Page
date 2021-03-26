import React, { useContext } from 'react'
import { GlobalContext } from '../../../Context/GlobalContext';
import '../../../styles/app/components/PhoneContainer/Circle.css';

export const Circle = () => {

    const { widthScreen } = useContext(GlobalContext);

    return (
        <>
            <img src='images/circles.svg' className={widthScreen <= 980 ? 'Circle' : null} alt='Circle'  style={widthScreen > 980 ? { width: '75vw', position: 'absolute', top: '-110%', left: '-15%', zIndex: '0'} : null} />
        </>
    )
}

export default Circle;