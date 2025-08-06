import type { ElementType } from "react"

type TaskChatProps = {
    text: string
    status: "success" | "failure" | "default"
    icon: ElementType
    chartValue: number
}

export function TaskChart({text, status, chartValue, icon: Icon}: TaskChatProps){
    return(
        <div 
            data-status={status}
            className=" 
                rounded-[22px] p-1.5 bg-[var(--color-white)] shadow-(--box-shadow) cursor-pointer transition-all duration-300 hover:shadow-none w-1/2 border-2 border-solid
                data-[status=success]:border-[var(--color-success)] 
                data-[status=failure]:border-[var(--color-danger)] 
                data-[status=default]:border-[var(--color-primary)]
            "
        >
            <div 
                data-status={status}
                className=" 
                    flex items-center justify-between border-2 border-solid p-2.5 rounded-2xl 
                    data-[status=success]:border-[var(--color-success)] 
                    data-[status=failure]:border-[var(--color-danger)] 
                    data-[status=default]:border-[var(--color-primary)] 
                "
            >
                <div className="flex items-center" >
                    <h1 
                        data-status={status}
                        className="
                            flex items-center justify-center  
                            data-[status=success]:text-[var(--color-success)] 
                            data-[status=failure]:text-[var(--color-danger)] 
                            data-[status=default]:text-[var(--color-primary)]
                        "
                    >
                        <Icon size={30}/>
                    </h1>
                    <h3 className=" ml-2 text-lg cursor-pointer text-[var(--color-dark-variant)] font-medium">
                        {text}
                    </h3>
                </div>
                <div 
                    data-status={status}
                    className=" 
                        items-center justify-center p-2.5 rounded-xl 
                        data-[status=success]:bg-[var(--color-success)] 
                        data-[status=failure]:bg-[var(--color-danger)] 
                        data-[status=default]:bg-[var(--color-primary)] 
                    "
                >
                    <h1 className="text-2xl font-extrabold text-[var(--color-white)]">
                        {chartValue}
                    </h1>
                </div>
            </div>
        </div>
    )
}