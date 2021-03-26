import React, { useContext } from 'react'
import { GlobalContext } from '../../Context/GlobalContext';
import '../../styles/app/components/ContainerTwo/TwoParagraphsAndImage.css';

export const TwoParagraphsAndImage = () => {
    const { widthScreen } = useContext(GlobalContext);

    return (
        <div className='twoParagraphsAndImage' style={widthScreen <= 980 ? { flexDirection: 'column'} : null }>
            {widthScreen <= 980 ? <div className='Image'>
            <img src='images/ImageDesignedMobile.svg' alt='Designed Image' />
            </div> : null}

            <div className='halfParagraphs' style={widthScreen <= 980 ? {width: '100%', 
            height: '170vw',marginLeft: '0'} : null}>

                <h3 style={widthScreen <= 980 ? {fontSize: '5.5vw', width: '50%', 
                margin: '0 auto', marginBottom: '5vw', textAlign: 'center'} : null}>
                    Introducing an extensible editor
                </h3>


                <p style={widthScreen <= 980 ? { width: '75%', fontSize: '4vw', 
                margin: '0 auto', textAlign: 'center'} : null}>
                    Blogr features an exceedingly intuitive interface which lets you focus on one thing:
                    creating content. The editor supports management of multiple blogs and allows 
                    easy manipulation of embeds such as images, videos, and Markdown. Extensibility 
                    with plugins and themes provide easy ways to add functionality or change the looks 
                    of a blog.
                </p>

                <h3 style={widthScreen <= 980 ? {fontSize: '5.5vw', width: '50%', 
                margin: '0 auto', marginBottom: '5vw', marginTop: '10vw', textAlign: 'center'} : null}>
                    Robust content management
                </h3>

                <p style={widthScreen <= 980 ? { width: '75%', fontSize: '4vw', 
                margin: '0 auto', textAlign: 'center'} : null}>
                    Flexible content management enables users to easily move through posts. 
                    Increase the usability of your blog by adding customized categories, sections, 
                    format, or flow. With this functionality, you’re in full control.
                </p>

            </div>

            {widthScreen > 980 ? <div className='halfImage'>
                <img src='images/ImageDesigned.svg' alt='Designed Image' style={{ width: '70vw'}} />
            </div> : null}
            
        </div>
    )
}

export default TwoParagraphsAndImage;