import React, { useContext }from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import '../../styles/app/components/PhoneContainer/Phone.css';

export const Phone = () => {

    const { widthScreen } = useContext(GlobalContext);

    return (
        <div class='Phone' style={widthScreen <= 980 ? {top: '-30%'} : null}>

            <img src='images/phone.svg' style={widthScreen <= 980 ? {width: '90vw'} : null} alt='Phone'></img>
            
        </div>
    )
}

export default Phone;