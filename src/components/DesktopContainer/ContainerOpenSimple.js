import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import '../../styles/app/components/DesktopContainer/ContainerOpenSimple.css';

export const ContainerOpenSimple = () => {

    const { widthScreen } = useContext(GlobalContext);

    return (
        <div className='ContainerOpenSimple' style={widthScreen <= 980 ? { width: '100vw', 
        marginLeft: '0', margin: '0 auto'} : null}>
            
            <h3 style={widthScreen <= 980 ? { width: '50%', fontSize: '5.5vw', textAlign: 'center',
             margin: '0 auto', marginTop: '8vw'} : null}>
                Free, open, simple
            </h3>

            <p style={widthScreen <= 980 ? { width: '74%', fontSize: '4vw', 
                margin: '0 auto', textAlign: 'center', marginTop: '5vw'} : null}> 
                Blogr is a free and open source application backed by a large community 
                of helpful developers. It supports features such as code syntax highlighting,
                RSS feeds, social media integration, third-party commenting tools, and works 
                seamlessly with Google Analytics. The architecture is clean and is relatively
                easy to learn.
            </p>

            <h3 style={widthScreen <= 980 ? { width: '50%', fontSize: '5.5vw', textAlign: 'center',
             margin: '0 auto', marginTop: '8vw'} : null}>
                 Powerful tooling
            </h3>

            <p style={widthScreen <= 980 ? { width: '75%', fontSize: '4vw', 
                margin: '0 auto', textAlign: 'center', marginTop: '5vw'} : null}>
                Batteries included. We built a simple and straightforward CLI tool that makes customization 
                and deployment a breeze, butcapable of producing even the most complicated sites.
            </p>

        </div>
    )
}

export default ContainerOpenSimple;
