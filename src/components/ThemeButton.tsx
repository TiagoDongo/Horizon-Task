import { RiMoonFill, RiSunFill } from "@remixicon/react";
import { useEffect, useState } from "react";

export function ThemeButton(){
    const [dark, setDark] = useState(false)

    useEffect(() => {
        const saveTheme = localStorage.getItem('theme')
        if (saveTheme === 'dark') {
            document.body.classList.add('dark-theme')
            setDark(true)
        }
    }, [])

    function changeTheme(){
        const newDark = !dark;
        setDark(newDark);

        if (newDark) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <a 
            href="#"
            onClick={(e) => {e.preventDefault(); changeTheme()}}
            className="text-[var(--color-dark)] flex w-fit p-0.5 rounded-xl border-solid border-2"
        >
            {dark ? <RiSunFill size={24}/> : <RiMoonFill size={24}/> }
        </a>
    )
}