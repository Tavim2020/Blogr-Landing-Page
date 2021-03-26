import React from 'react';


export const GlobalContext = React.createContext();

const widthScreen = window.screen.width;

export const GlobalStorage = ({children}) =>{

    return <GlobalContext.Provider value={{
        widthScreen,
    }}>
        {children}
    </GlobalContext.Provider>
}