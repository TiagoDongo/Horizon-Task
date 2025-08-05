import { useState } from "react";
import { AuthForm, Logo, ThemeButton, TogglePanel } from "../components";
import { RiCheckDoubleFill } from "@remixicon/react";
import { Link } from "react-router-dom";

export function Login() {
    const [isRegistering, setIsRegistering] = useState(false);

    const handleToggle = () => {
        setIsRegistering((prev) => !prev);
    };

    return (
        <div className="bg-(--color-background) flex h-screen items-center justify-center animate-[fadeInAnimation ease 2s] transition-all duration-300">
            <div className="absolute top-2.5 w-full px-5 flex items-center justify-between">
                <Link to={'/dashboard'}>
                    <Logo icon={RiCheckDoubleFill}/>
                </Link>
                <ThemeButton/>
            </div>
            <div data-regist={isRegistering}
                className="relative w-[768px] max-w-full min-h-[480px] bg-(--color-background) rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] overflow-hidden"
            >
                <AuthForm isRegistering={isRegistering} />
                <TogglePanel isRegistering={isRegistering} onToggle={handleToggle} />
            </div>
        </div>
    );
}
