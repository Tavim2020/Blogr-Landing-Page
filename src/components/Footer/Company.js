import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import '../../styles/app/components/Footer/Company.css';

export const Company = () => {

    const { widthScreen } = useContext(GlobalContext);

    return (
        <div className='Company' style={widthScreen <= 980 ? { marginLeft: '0', width: '100vw'} : null}>

            <h5 style={widthScreen <= 980 ? {fontSize: '5vw', textAlign: 'center'} : null}>Company</h5>
            
            
            <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                About 
                <span></span>
            </p>

            <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                Team
                <span></span>
            </p>

            <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                Blog
                <span></span>
            </p>


            <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                Careers
                <span></span>
            </p>

        </div>
    )
}

export default Company;
