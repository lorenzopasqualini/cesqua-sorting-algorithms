export type SortingType=
    | "bubble"
    | "merge"
    | "quick"
    | "selection"
    | "insertion"

export type SelectType= {
    value: string,
    label: string
}

export type AnimationType= [number[], boolean][]