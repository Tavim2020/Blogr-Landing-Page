import React, { useContext } from 'react'
import Company from './Company';
import Connect from './Connect';
import Product from './Product';
import '../../styles/app/components/Footer/Footer.css';
import FooterLogo from './FooterLogo';
import { GlobalContext } from '../../Context/GlobalContext';

export const Footer = () => {

    const { widthScreen } = useContext(GlobalContext);

    return (
        <footer style={widthScreen <= 980 ? { height: '170vw', flexDirection: 'column',
        borderTopRightRadius: '25vw', alignItems: 'center'} : null}>
            
            <FooterLogo />
            <Product />
            <Company />
            <Connect />

        </footer>
    )
}

export default Footer;