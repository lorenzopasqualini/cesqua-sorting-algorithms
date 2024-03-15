export const MIN_ANIMATION_SPEED= 100
export const MAX_ANIMATION_SPEED= 500

export function genRandomNumber(min: number, max: number){
    return Math.floor(Math.random() * (max - min + 1) + min)
}