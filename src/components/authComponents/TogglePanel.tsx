type TogglePanelProps = {
  isRegistering: boolean;
  onToggle: () => void;
};

export function TogglePanel({ isRegistering, onToggle }: TogglePanelProps) {
    return (
        <div
        data-regist={isRegistering ? "true" : "false"}
        className="
            absolute top-0 left-1/2 w-1/2 h-full z-[1000] overflow-hidden 
            transition-all duration-700 ease-in-out
            data-[regist=true]:-translate-x-full
            data-[regist=true]:rounded-tr-[150px]
            data-[regist=true]:rounded-br-[100px]
            data-[regist=false]:translate-x-0
            data-[regist=false]:rounded-tl-[150px]
            data-[regist=false]:rounded-bl-[100px]
        "
        >
            <div
                data-regist={isRegistering ? "true" : "false"}
                className="
                    absolute top-0 left-[-100%] w-[200%] h-full  bg-gradient-to-r from-[#5c6bc0] to-[#512da8] text-zinc-50 transition-transform duration-700 ease-in-out
                    data-[regist=true]:translate-x-1/2
                    data-[regist=false]:translate-x-0
                "
            >
                {/* Painel esquerdo (Welcome Back) */}
                <div 
                    className=" absolute top-0 left-0 w-1/2 h-full flex flex-col items-center justify-center px-6 text-center transition-opacity duration-500 ease-in-out "
                >
                    <h1 className="text-2xl font-bold">Welcome Back!</h1>
                    <p className="text-sm mt-4 mb-6">Enter your personal details to use all features</p>
                    <button onClick={onToggle}
                        className="bg-transparent border-zinc-50 rounded-lg font-semibold uppercase mt-2.5 cursor-pointer text-zinc-50 text-xs py-2.5 px-[45px] border border-solid"
                    >
                        Sign In
                    </button>
                </div>

                {/* Painel direito (Hello Friend) */}
                <div 
                    className="absolute top-0 right-0 w-1/2 h-full flex flex-col items-center justify-center px-6 text-center transition-opacity duration-500 ease-in-out text-zinc-50"
                >
                    <h1 className="text-2xl font-bold">Hello, Friend!</h1>
                    <p className="text-sm mt-4 mb-6">
                        Register with your personal details to use all features
                    </p>
                    <button onClick={onToggle}
                        className="bg-transparent border-zinc-50 rounded-lg font-semibold uppercase mt-2.5 cursor-pointer text-zinc-50 text-xs py-2.5 px-[45px] border border-solid"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
