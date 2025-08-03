import { RiCheckDoubleFill } from "@remixicon/react";
import { Logo } from "./Logo";
import { ThemeButton } from "./ThemeButton";
import avatarImg from '../assets/images/avatarImg.jpg'

export function Navbar(){
    return (
        <nav
            className="flex items-center justify-between bg-[var(--color-white)] rounded-bl-4xl rounded-br-4xl shadow-(--box-shadow) p-3.5 transition-shadow hover:shadow-none"
        >
            <Logo icon={RiCheckDoubleFill}/>

            <div className="flex gap-5 items-center text-[var(--color-dark)] text-base font-semibold">
                <a href="#" className=" transition-all duration-300 hover:text-blue-500">Dashboard</a>
                <a href="#" className=" transition-all duration-300 hover:text-blue-500">History</a>
                <a href="#" className=" transition-all duration-300 hover:text-blue-500">Contacts</a>
            </div>

            <div className="flex gap-5 items-center">
                <ThemeButton/>
                <div>
                    <img src={avatarImg} className="w-11 h-11 rounded-[50%]"/>
                </div>
            </div>
            
        </nav>
    )
}