'use client'
import { createContext, useContext, useState } from "react"
import { SortingType } from "@/lib/types"
import { MAX_ANIMATION_SPEED } from "@/lib/utils"

interface SortingContextType{
    arrayToSort: number[]
    setArrayToSort: (array: number[])=> void
    selectedAlgorithm: SortingType
    setSelectedAlgorithm: (algorithm: SortingType)=> void
    isSorting: boolean
    setIsSorting: (isSorting: boolean)=> void
    animationSpeed: number
    setAnimationSpeed: (spped: number)=> void
    animationComplete: boolean
    setAnimationComplete: (isComplete: boolean)=> void
    resetArray: ()=> void
    runAnimation: ()=> void
}

const SortingContext= createContext<SortingContextType | undefined>(undefined)

export const SortingProvider= ({children}: {children: React.ReactNode})=> {
    const [arrayToSort, setArrayToSort]= useState<number[]>([])
    const [selectedAlgorithm, setSelectedAlgorithm]= useState<SortingType>("bubble")
    const [isSorting, setIsSorting]= useState<boolean>(false)
    const [animationSpeed, setAnimationSpeed]= useState<number>(MAX_ANIMATION_SPEED)
    const [animationComplete, setAnimationComplete]= useState<boolean>(false)

    const resetArray= ()=>{}
    const runAnimation= ()=>{}

    const value={
        arrayToSort,
        setArrayToSort,
        selectedAlgorithm,
        setSelectedAlgorithm,
        isSorting,
        setIsSorting,
        animationSpeed,
        setAnimationSpeed,
        animationComplete,
        setAnimationComplete,
        resetArray,
        runAnimation
    }

    return <SortingContext.Provider value={value}>{children}</SortingContext.Provider>
}

export const useSortingContext= ()=>{
    const context= useContext(SortingContext)
    if(!context){
        throw new Error("An error occured in regards to the provider")
    }
    return context
}