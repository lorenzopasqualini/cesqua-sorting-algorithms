export const MIN_ANIMATION_SPEED= 100
export const MAX_ANIMATION_SPEED= 500

export function genRandomNumber(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const algorithms=[
    { label: 'Bubble', value: 'bubble' },
    { label: 'Quick', value: 'quick' },
    { label: 'Merge', value: 'merge' },
    { label: 'Selection', value: 'selection' },
    { label: 'Insertion', value: 'insertion' }
]