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
                className="block appearance-none h-8 w-full bg-gray-200 border-green-700 px-4 py-1 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline text-gray-400"
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