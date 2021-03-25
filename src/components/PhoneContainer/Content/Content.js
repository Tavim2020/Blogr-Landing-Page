import React from 'react'
import Circle from './Circle';
import TextInfrastructure from './TextInfrastructure';
import '../../../styles/app/components/PhoneContainer/Content.css'


export const Content = () => {
    return (
        <div className='Content'>

            <Circle />
            <TextInfrastructure/>

        </div>
    )
}

export default Content;
