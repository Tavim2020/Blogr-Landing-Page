import React from 'react';
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

function App() {
  const widthScreen = window.screen.width;
  return (
      <main style={{ backgroundColor: '#FAFAFA', width: '100vw'}}>

        <div className='backgroundImage' >

          <div className='containerTop' >
              <Header />
              <ContainerTextAndButton />
          </div>

        </div>

          <section className='containerTwo' >
            
            <TitleDesigned />
            <TwoParagraphsAndImage />

          </section>

          <section className='PhoneContainer'>

              <Phone />
              <Content />

          </section>

          <section className='DesktopContainer'>

            <ImageDesktop />
            <ContainerOpenSimple />

          </section>

          <Footer />

      </main>
  );
}

export default App;
