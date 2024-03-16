import { SelectType } from "@/lib/types"

export const Select= ({
    options,
    defaultValue,
    onChange,
    disabled= false
}: {
    options: SelectType[],
    defaultValue: string,
    onChange: (e: React.ChangeEvent <HTMLSelectElement>)=> void,
    disabled: boolean
})=>{
    return(
        <div className="inline-block relative w-48">
            <select
                defaultValue={defaultValue}
                onChange={onChange}
                disabled={disabled}
                className="block appearance-none h-8 w-full bg-gray-300 border-2 border-[#00ff7f] px-4 py-1 pr-8 rounded-md leading-tight focus:outline-none"
            >
                {options.map((opt)=>(
                    <option value={opt.value} key={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}