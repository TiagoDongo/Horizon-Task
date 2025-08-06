import { RiFacebookFill, RiGithubLine, RiGoogleFill, RiLinkedinFill } from "@remixicon/react";
import { IconButton } from "../IconButton";
import { Link } from "react-router-dom";

type AuthFormProps = {
  isRegistering: boolean;
};

export function AuthForm({ isRegistering }: AuthFormProps) {
    return (
        <>
        {/* Sign Up */}
        <div
            data-regist={isRegistering}
            className=" absolute top-0 left-0 w-1/2 h-full opacity-0 z-10 transition-all duration-700 ease-in-out data-[regist=true]:translate-x-full data-[regist=true]:z-20 data-[regist=true]:opacity-100 "
        >
            <form className="bg-(--color-background) flex flex-col items-center justify-center px-10 h-full text-(--color-dark)">
                <h1 className="text-2xl font-bold">Create Account</h1>
                <div className="flex gap-5 mt-[30px]">
                    <IconButton icon={RiGoogleFill} />
                    <IconButton icon={RiGithubLine} />
                    <IconButton icon={RiLinkedinFill} />
                    <IconButton icon={RiFacebookFill} />
                </div>
                <span className="text-sm mb-2 mt-4">or use your email to register</span>
                <input
                    type="text"
                    placeholder="Name"
                    className="bg-(--color-white) border-none my-2 px-[15px] py-2.5 text-[13px] rounded-lg w-full outline-none text-(--color-dark)"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-(--color-white) border-none my-2 px-[15px] py-2.5 text-[13px] rounded-lg w-full outline-none text-(--color-dark)"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-(--color-white) border-none my-2 px-[15px] py-2.5 text-[13px] rounded-lg w-full outline-none text-(--color-dark)"
                />

                <Link to={'/dashboard'}>
                    <button className="bg-[#512da8] text-xs py-2.5 px-[45px] border border-solid border-transparent rounded-lg font-semibold uppercase mt-2.5 cursor-pointer text-zinc-50"
                    >
                        Sign Up
                    </button>
                </Link>

            </form>
        </div>

        {/* Sign In */}
        <div
            data-regist={isRegistering}
            className="
            absolute top-0 left-0 w-1/2 h-full z-20 transition-all duration-700 ease-in-out text-(--color-dark)
            data-[regist=true]:translate-x-full
            data-[regist=true]:z-10
            data-[regist=true]:opacity-0
            "
        >
            <form className="bg-(--color-background) flex flex-col items-center justify-center px-10 h-full">
                <h1 className="text-2xl font-bold">Sign In</h1>
                <div className="flex gap-5 mt-[30px]">
                    <IconButton icon={RiGoogleFill} />
                    <IconButton icon={RiGithubLine} />
                    <IconButton icon={RiLinkedinFill} />
                    <IconButton icon={RiFacebookFill} />
                </div>
                <span className="text-sm mb-2 mt-4">or use your email password</span>
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-(--color-white) border-none my-2 px-[15px] py-2.5 text-[13px] rounded-lg w-full outline-none text-(--color-dark)"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="bg-(--color-white) border-none my-2 px-[15px] py-2.5 text-[13px] rounded-lg w-full outline-none text-(--color-dark)"
                />
                <a href="#" className="text-(--color-dark) text-[13px] mt-4 mb-2">
                    Forgot Your Password?
                </a>
                <Link to={'/dashboard'}>
                    <button className="bg-[#512da8] text-zinc-50 text-xs py-2.5 px-[45px] border border-solid border-transparent rounded-lg font-semibold uppercase mt-2.5 cursor-pointer">
                        Sign In
                    </button>
                </Link>
            </form>
        </div>
        </>
    );
}
