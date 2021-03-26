import React, { useContext }from 'react'
import Text from './Text';
import Buttons from './Buttons';
import '../../styles/app/components/ContainerTop/ContainerTextAndButton/ContainerTextAndButton.css'
import { GlobalContext } from '../../Context/GlobalContext';

export const ContainerTextAndButton = () => {
    const { widthScreen } = useContext(GlobalContext);
    
    return (
        <div className='containerTextAndButton' style={widthScreen <= 980 ? ({flex: '1'}) : null}>
            <Text />
            <Buttons />
            <img style={widthScreen <= 980 ? {top: '-280%', left: '-85%',width: '350%'} : null} src='images/forms.svg' alt='Formas' />
        </div>
    )
}


export default ContainerTextAndButton;
