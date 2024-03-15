import { AnimationType, SortingType } from "./types"
import { getBubble } from "@/algorithm/bubble"
import { getSelect } from "@/algorithm/selection"
import { getInsert } from "@/algorithm/insertion"
import { getMerge } from "@/algorithm/merge"

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

export function getAnimation(
    selectedAlgorithm: SortingType,
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationType)=> void
) {
    switch(selectedAlgorithm){
        case 'bubble':
            getBubble(isSorting, array, runAnimation)
            break;
        case 'selection':
            getSelect(isSorting, array, runAnimation)
            break;
        case 'insertion':
            getInsert(isSorting, array, runAnimation)
            break;
        case 'merge':
            getMerge(isSorting, array, runAnimation)
        default:
            break;
    }
}
