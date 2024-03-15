import { AnimationType } from "@/lib/types";

function runInsert(array: number[], animations: AnimationType){
    for(let i = 1; i < array.length; i++){
        animations.push([[i], false])
        const currentValue= array[i]

        let j = i - 1
        while(j >= 0 && array[j] > currentValue){
            animations.push([[j, j + 1, i], false])
            array[j + 1]= array[j]
            animations.push([[j + 1, array[j]], true])
            j -= 1
        }
        array[j + 1]= currentValue
        animations.push([[j + 1, currentValue], true])
    }
}

export function getInsert(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationType)=> void
){
    if(array.length <= 1) return [];
    const animations: AnimationType= []
    const auxArray= array.slice()

    runInsert(auxArray, animations)
    runAnimation(animations)
}
