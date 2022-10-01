import React, {createContext, useContext, useState} from 'react'

const StateContext = createContext()


export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [themeSettings, setthemeSettings] = useState(false)

    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, themeSettings, setthemeSettings}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)