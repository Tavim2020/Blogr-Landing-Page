import React from 'react'
import Text from './Text';
import Buttons from './Buttons';
import '../../styles/app/components/ContainerTop/ContainerTextAndButton/ContainerTextAndButton.css'

export const ContainerTextAndButton = () => {
    const widthScreen = window.screen.width;
    return (
        <div className='containerTextAndButton' style={widthScreen <= 980 ? ({flex: '1'}) : null}>
            <Text />
            <Buttons />
            <img src='images/forms.svg' alt='Formas' />
        </div>
    )
}


export default ContainerTextAndButton;
