import { AnimationType } from "@/lib/types";

function merge(
    array: number[],
    beg: number,
    mid: number,
    fin: number,
    animations: AnimationType
) {
    let i = 0;
    let j = 0;
    let k = beg;
    const left = array.slice(beg, mid);
    const right = array.slice(mid, fin);

    while (i < left.length && j < right.length) {
      animations.push([[beg + i, mid + j], false]);
      if (left[i] <= right[j]) {
        animations.push([[k, left[i]], true]);
        array[k] = left[i];
        i += 1;
      } else {
        animations.push([[k, right[j]], true]);
        array[k] = right[j];
        j += 1;
      }
      k++;
    }
    while (i < left.length) {
      animations.push([[beg + i], false]);
      animations.push([[k, left[i]], true]);
      array[k] = left[i];
      i += 1;
      k += 1;
    }
    while (j < right.length) {
      animations.push([[mid + j], false]);
      animations.push([[k, right[j]], true]);
      array[k] = right[j];
      j += 1;
      k += 1;
    }
}

function runMerge(array: number[]) {
    const animations: AnimationType = [];
    for (let k = 1; k < array.length; k = 2 * k) {
      for (let i = 0; i < array.length; i += 2 * k) {
        const beg = i;
        const mid = i + k;
        const fin = Math.min(i + 2 * k, array.length);
        merge(array, beg, mid, fin, animations);
      }
    }
    return animations;
  }

export function getMerge(
    isSorting: boolean,
    array: number[],
    runAnimation: (animations: AnimationType)=> void
){
    if (array.length <= 1) return [];
  
    const auxiliaryArray = array.slice();
    const animations = runMerge(auxiliaryArray);
    runAnimation(animations);
}
