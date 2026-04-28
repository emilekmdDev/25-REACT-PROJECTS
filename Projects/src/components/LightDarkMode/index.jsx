import { useState } from "react"
import UserLocalStorage from "./UserLocalStorage"
import './index.css'
export default function LightDarkMode() {
    
    const [theme, setTheme] = UserLocalStorage('theme','light')

    function handleToggleTheme() {
        setTheme(theme==="light" ? "dark" : "light")    
    }

    return <div className="light-dark-mode" data-theme={theme} >
        <div>
            <p>Hello world !</p>
            <button onClick={handleToggleTheme} >Change the theme</button>
        </div>
    </div>
}