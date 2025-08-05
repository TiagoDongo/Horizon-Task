import { Link, useNavigate } from "react-router-dom";
import { ButtonAction, Footer, Logo, Task, ThemeButton } from "../components";
import { RiArrowRightLine, RiCheckDoubleLine, RiGithubLine, RiGoogleFill} from "@remixicon/react";

export function Home(){
    const navigate = useNavigate();
    function handleClick() {navigate("/dashboard");}


    return(
        <div className="bg-[var(--color-background)] animate-[fadeInAnimation ease 2s] transition-all duration-300 p-5 ">

            <nav className="flex items-center justify-between">
                <Logo icon={RiCheckDoubleLine}/>
                <div className="flex items-center gap-5">
                    <ThemeButton/>
                    <Link part="/" to={'/signup&signin'} className="flex items-center gap-5">
                        <ButtonAction text="Sign Up"/>
                        <ButtonAction text="Sign In" variant/>
                    </Link>
                </div>
            </nav>

            <main className="flex flex-col gap-[70px] mt-[70px]">
                <section className="flex flex-col gap-5 items-center">
                    <h1 className="text-4xl text-center text-[var(--color-dark)] font-bold">
                        Crie e gerencie as tuas tarefas num único lugar
                    </h1>

                    <div className="flex rounded-xl items-center justify-between gap-5">
                        <ButtonAction text="Use Google" icon={RiGoogleFill} hasIcon iconPosition="left" variant/>
                        <ButtonAction text="Use Github" icon={RiGithubLine} hasIcon iconPosition="left" />
                    </div>

                    <div className="flex items-center gap-2.5">
                        <div className="h-0.5 bg-[var(--color-dark)] opacity-30 w-[20vw]"></div>
                        <h3 className="text-2xl text-[var(--color-dark)] font-semibold opacity-70">Ou</h3>
                        <div className="h-0.5 bg-[var(--color-dark)] opacity-30 w-[20vw]"></div>
                    </div>

                    <div className="bg-[var(--color-info-dark)] flex py-2 px-5 rounded-xl items-center gap-5 w-3/5 flex-1 justify-between">
                        <input 
                            type="email" 
                            placeholder="Digite o seu email"
                            className="outline-none border-none bg-[var(--color-info-dark)] text-zinc-50 rounded-md flex-1 py-1.5 px-2.5 shadow-(--box-shadow) placeholder:text-zinc-50 text-base opacity-100"
                        />
                        <ButtonAction text="Cadastre-se"/>
                    </div>
                </section>

                <section className="bg-[var(--color-white)] rounded-xl gap-[30px] flex flex-col shadow-(--box-shadow) py-[60px] px-5">
                    <div className="grid grid-cols-2 items-center gap-5">
                        <h2 className="text-5xl font-bold text-[var(--color-dark)]">
                            Organize o seu dia-dia
                        </h2>
                        <p className="text-2xl font-semibold text-[var(--color-info-dark)]">
                            Com o Horizon Task consegues organizar os teus compromissos, datas importantes, tarefas de forma a teres um dia produtivo em distrações
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-5 items-center mt-10 mb-10 ">
                        <Task title="Task"/>
                        <Task title="Task" hasdescription/>
                        <Task title="Task" hasdescription description="description" showdesc/>
                    </div>

                    <div className="flex flex-col gap-[30px] items-center">
                        <p className="text-[var(--color-dark)] text-xl self-center w-1/2 text-center">
                            Crie desde task simples, sem detalhes, até task com detalhes,lembretes ou informações importantes para que não te esqueças.
                        </p>
                        <ButtonAction 
                            text="Experimento o horizon Task" 
                            hasIcon icon={RiArrowRightLine} 
                            iconPosition="right"
                            action={handleClick}
                        />
                    </div>
                </section>
            </main>

            <div className="mt-[70px]">
                <Footer>&copy;2025 TiagoDongo. Todos os direitos reservados.</Footer>
            </div>
        </div>
    )
}