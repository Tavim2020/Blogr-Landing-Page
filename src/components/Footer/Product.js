import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import '../../styles/app/components/Footer/Product.css';

export const Product = () => {

    const { widthScreen } = useContext(GlobalContext);

    return (
        <div className='Product'style={widthScreen <= 980 ? { marginLeft: '0', width: '100vw'} : null}>

            <h5 style={widthScreen <= 980 ? {fontSize: '5vw', textAlign: 'center'} : null}>Product</h5>
            
            
            <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                Overview 
                <span></span>
            </p>
            <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                Pricing
                <span></span>
            </p>
            <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                Marketplace
                <span></span>
            </p>
            <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                Features
                <span></span>
            </p>
            <p style={widthScreen <= 980 ? {fontSize: '4vw', textAlign: 'center',
            alignItems: 'center'} : null}>
                Integrations
                <span></span>
            </p>


        </div>
    )
}

export default Product;