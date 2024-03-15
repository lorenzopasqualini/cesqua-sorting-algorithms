import { AnimationType } from "@/lib/types";

function runBubble(array: number[], animations: AnimationType){  
    for(let i=0; i < array.length - 1; i++){
        for(let j=0; j < array.length - 1 - i; j++){
            animations.push([[j, j + 1], false])
            if(array[j] > array[j + 1]){
                animations.push([[j, array[j + 1]], true]);
                animations.push([[j + 1, array[j]], true]);
                [array[j], array[j + 1]]= [array[j + 1], array[j]]
            }
        }
    }
}

export function genBubbleSort(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationType)=> void
){
    if(array.length <= 1) return [];
    const animations: AnimationType= []
    const auxiliaryArray= array.slice()

    runBubble(auxiliaryArray, animations)
    runAnimation(animations)
}
