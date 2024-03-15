import { MAX_ANIMATION_SPEED, MIN_ANIMATION_SPEED } from "@/lib/utils";

export const Slider= ({
    min= MIN_ANIMATION_SPEED,
    max= MAX_ANIMATION_SPEED,
    step= 12,
    value,
    handleChange,
    disabled= false
}: {
    min?: number
    max?: number
    step?: number
    value: number
    handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void
    disabled?: boolean
})=> {
    return(
        <div className="flex gap-2 items-center justify-center">
            <span className="text-center text-red-600">Slow</span>
            <input
                type='range'
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-600"
            />
            <span className="text-center text-green-600">Fast</span>
        </div>
    )
}