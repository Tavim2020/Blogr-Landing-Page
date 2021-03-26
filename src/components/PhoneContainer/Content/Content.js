import React, { useContext } from 'react'
import Circle from './Circle';
import TextInfrastructure from './TextInfrastructure';
import '../../../styles/app/components/PhoneContainer/Content.css'
import { GlobalContext } from '../../../Context/GlobalContext';


export const Content = () => {
    const { widthScreen } = useContext(GlobalContext);

    return (
        <div className='Content' style={widthScreen <= 980 ? {height: '135vw', 
        borderTopRightRadius: '25vw',  borderBottomLeftRadius: '25vw'} : null}>

            <Circle />
            <TextInfrastructure/>

        </div>
    )
}

export default Content;
