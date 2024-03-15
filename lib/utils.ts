import { genBubbleSort } from "@/algorithm/bubble"
import { AnimationType, SortingType } from "./types"

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

export function genAnimation(
    selectedAlgorithm: SortingType,
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationType)=> void
) {
    switch(selectedAlgorithm){
        case 'bubble':
            genBubbleSort(isSorting, array, runAnimation)
            break;
        default:
            break;
    }
}