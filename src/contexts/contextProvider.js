import React, {createContext, useContext, useState} from 'react'

const StateContext = createContext()


export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [themeSettings, setThemeSettings] = useState(false)

    return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, themeSettings, setThemeSettings}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)