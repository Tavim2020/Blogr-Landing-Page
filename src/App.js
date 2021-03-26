import React, { useContext } from 'react';
import './styles/app/components/ContainerTop/ContainerTop.css';
import './styles/app/components/ContainerTwo/ContainerTwo.css';
import Header from './components/Header/Header';
import ContainerTextAndButton from '../src/components/ContainerTextAndButton/ContainerTextAndButton';
import TitleDesigned from './components/ContainerTwo/TitleDesigned';
import  TwoParagraphsAndImage  from './components/ContainerTwo/TwoParagraphsAndImage';
import './styles/app/components/PhoneContainer/PhoneContainer.css'
import Phone from './components/PhoneContainer/Phone';

import Content from './components/PhoneContainer/Content/Content';
import ImageDesktop from './components/DesktopContainer/ImageDesktop';
import ContainerOpenSimple from './components/DesktopContainer/ContainerOpenSimple';
import './styles/app/components/DesktopContainer/DesktopContainer.css';
import Footer from './components/Footer/Footer';
import { GlobalContext } from './Context/GlobalContext';



function App() {
  const { widthScreen } = useContext(GlobalContext)

  return (
      <main style={{ backgroundColor: '#FAFAFA', width: '100vw'}}>

        <div className='backgroundImage' style={widthScreen <= 980 ? {height: '135vw', borderBottomLeftRadius: '17vw'} : null} >

          <div className='containerTop' >
              <Header />
              <ContainerTextAndButton />
          </div>

        </div>

          <section className='containerTwo' style={widthScreen <= 980 ? { height: '320vw'} : null} >
            
            <TitleDesigned />
            <TwoParagraphsAndImage />

          </section>

          <section className='PhoneContainer' style={widthScreen <= 980 ? {height: '145vw'} : null }>

              <Phone />
              <Content />

          </section>

          <section className='DesktopContainer' style={widthScreen <= 980 ? {height: '210vw', 
          flexDirection: 'column'} : null } >

            <ImageDesktop />
            <ContainerOpenSimple />

          </section>

          <Footer />

      </main>
  );
}

export default App;
