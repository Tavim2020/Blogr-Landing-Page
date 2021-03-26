import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import '../../styles/app/components/ContainerTop/ContainerTextAndButton/Buttons.css';

export const Buttons = () => {
    const { widthScreen } = useContext(GlobalContext);

    return (
        <div className='buttons' style={widthScreen <= 980 ? {marginTop: '15vw', width: '90vw'} : null}>
            
            <button style={widthScreen <= 980 ? {width: '40%', height: '12vw',
            borderRadius: '47vw', fontSize: '4vw'} : null}>
                Start for Free
            </button>

            <button style={widthScreen <= 980 ? {width: '40%', height: '12vw',
            borderRadius: '47vw', fontSize: '4vw', marginLeft: '5vw'} : null}>
                Learn More
            </button>

        </div>
    )
}

export default Buttons;
