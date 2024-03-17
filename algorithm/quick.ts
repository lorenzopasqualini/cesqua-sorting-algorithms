import { AnimationType } from "@/lib/types";

function partition(
    array: number[],
    beg: number,
    fin: number,
    animations: AnimationType
  ) {
    let i= beg;
    let j= fin + 1;
    const condition= true;
    const pivot= array[beg];

    while(condition){
      while(array[++i] <= pivot){
        if(i === fin)
        break;
        animations.push([[i], false]);
      }
      while(array[--j] >= pivot){
        if(j === beg)
        break;
        animations.push([[j], false]);
      }
      if(j <= i)
      break;
      animations.push([[i, array[j]], true]);
      animations.push([[j, array[i]], true]);
      [array[i], array[j]]= [array[j], array[i]];
    }
    animations.push([[beg, array[j]], true]);
    animations.push([[j, array[beg]], true]);
    [array[beg], array[j]] = [array[j], array[beg]];
    return j;
}

function runQuick(
    array: number[],
    beg: number,
    fin: number,
    animations: AnimationType
){
    if (beg < fin) {
        const part = partition(array, beg, fin, animations);
        runQuick(array, beg, part - 1, animations);
        runQuick(array, part + 1, fin, animations);
    }
}

export function getQuick(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationType)=> void
){
    if(array.length <= 1) return [];
    const animations: AnimationType= []
    const auxArray= array.slice()

    runQuick(auxArray, 0, array.length - 1, animations);
    runAnimation(animations)
}
