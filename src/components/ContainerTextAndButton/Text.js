import React from 'react'
import '../../styles/app/components/ContainerTop/ContainerTextAndButton/Text.css';

export const Text = () => {
    const widthScreen = window.screen.width;
    return (
        <>
            <h1 className='h1'>  A modern publishing platform</h1>

            <h3 className='h3'>Grow your audience and build your online brand</h3>
        </>
    )
}

export default Text;
