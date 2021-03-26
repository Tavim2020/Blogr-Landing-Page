import React, { useContext } from 'react';
import { GlobalContext } from '../../../Context/GlobalContext';
import '../../../styles/app/components/PhoneContainer/TextInfrastructure.css';

export const TextInfrastructure = () => {

    const { widthScreen } = useContext(GlobalContext);

    return (
        <div className='TextInfrastructure' style={widthScreen <= 980 ? { width: '100%'} : null}>
           <h2 style={widthScreen <= 980 ? { width: '70%', fontSize: '7.5vw',
           margin: '0 auto', marginTop: '23vw', textAlign: 'center', marginBottom: '6vw'} : null}> 
           State of the Art Infrastructure
           </h2> 

           <p style={widthScreen <= 980 ? { width: '75%', fontSize: '4.5vw', 
                margin: '0 auto', textAlign: 'center'} : null}>
               With reliability and speed in mind, worldwide data centers provide the 
               backbone for ultra-fast connectivity. This ensures your site will load instantly, 
               no matter where your readers are, keeping your site competitive.
            </p>
        </div>
    )
}

export default TextInfrastructure;