import React from 'react'
import Company from './Company';
import Connect from './Connect';
import Product from './Product';
import '../../styles/app/components/Footer/Footer.css';
import FooterLogo from './FooterLogo';

export const Footer = () => {
    return (
        <footer>
            
            <FooterLogo />
            <Product />
            <Company />
            <Connect />

        </footer>
    )
}

export default Footer;