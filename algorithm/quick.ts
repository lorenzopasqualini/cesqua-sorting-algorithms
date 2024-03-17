import { AnimationType } from "@/lib/types";

function runQuick(){}

export function getQuick(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationType)=> void
){
    if(array.length <= 1) return [];
    const animations: AnimationType= []
    const auxArray= array.slice()

    runQuick();
    runAnimation(animations)
}
