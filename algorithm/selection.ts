import { AnimationType } from "@/lib/types";

function runSelect(array: number[], animations: AnimationType){
    for(let i=0; i < array.length -1; i++){
        let minIndex= i
        for(let j = i + 1; j < array.length; j++){
            animations.push([[j, minIndex], false])
            if(array[j] < array[minIndex]){
                minIndex= j
            }
        }
        animations.push([[i, array[minIndex]], true]);
        animations.push([[minIndex, array[i]], true]);
        [array[i], array[minIndex]]  = [array[minIndex], array[i]] 
    }
}

export function getSelect(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationType)=> void
){
    if(array.length <= 1) return [];
    const animations: AnimationType= []
    const auxArray= array.slice()

    runSelect(auxArray, animations)
    runAnimation(animations)
}
