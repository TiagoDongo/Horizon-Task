import { RiFilter3Fill } from "@remixicon/react"

type searchProps = {
    showfilter ?: boolean
}

export function SearchBar({showfilter}:searchProps) {
    return(
        <div
            className="flex items-center justify-between gap-5  rounded-lg "
        >

            <input 
                type="search"
                placeholder="Search"
                className="bg-[var(--color-white)] flex-1 rounded-lg text-[var(--color-dark)] outline-none text-sm placeholder:text-[var(--color-dark)] opacity-90 border border-solid border-(--color-info-dark) px-5 py-2 shadow-(--box-shadow)"
            />

            { showfilter &&
                <button
                    className="bg-[var(--color-white)] text-[var(--color-dark)] rounded-lg p-1.5 cursor-pointer border border-solid border-(--color-info-dark)"
                >
                    <RiFilter3Fill size={24}/>
                </button> 
            }

        </div>
    )
}