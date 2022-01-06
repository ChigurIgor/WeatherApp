import React, {createContext, useState} from "react";

const themes = {
    normal: {
        class: ''
    },
    warm: {
        class: 'warm'
    },
    cold: {
        class: 'styles.cold'
    }
}
const initialState = {
    theme: themes.normal,
    setNewTheme: () => {}
}
export const ThemeContext = createContext(initialState);

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('normal') // Default theme is light

    const setNewTheme = (newTheme) => {
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{theme, setNewTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

