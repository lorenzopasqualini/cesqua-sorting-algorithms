'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { AnimationType, SortingType } from "@/lib/types"
import { MAX_ANIMATION_SPEED, genRandomNumber } from "@/lib/utils"

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
    runAnimation: (animations: AnimationType)=> void
    resetRequired: boolean
}

const SortingContext= createContext<SortingContextType | undefined>(undefined)

export const SortingProvider= ({children}: {children: React.ReactNode})=> {
    const [arrayToSort, setArrayToSort]= useState<number[]>([])
    const [selectedAlgorithm, setSelectedAlgorithm]= useState<SortingType>("bubble")
    const [isSorting, setIsSorting]= useState<boolean>(false)
    const [animationSpeed, setAnimationSpeed]= useState<number>(MAX_ANIMATION_SPEED)
    const [animationComplete, setAnimationComplete]= useState<boolean>(false)
    const resetRequired= animationComplete || isSorting

    useEffect(()=>{
        resetArray()
        window.addEventListener('resize', resetArray)
        return()=>{
            window.addEventListener('resize', resetArray)
        }
    },[])

    const resetArray= ()=>{
        const content= document.getElementById("contcont")
        if(!content) return

        const contentW= content.clientWidth
        const contentH= window.innerHeight
        const tempArray: number[] = []
        const numLines= contentW / 8
        const maxLineH= Math.max(contentH - 420, 100)

        for(let i=0; i < numLines; i++){
            tempArray.push(genRandomNumber(35, maxLineH))
        }

        setArrayToSort(tempArray)
        setAnimationComplete(false)
        setIsSorting(false)

        const highestNum= window.setTimeout(()=>{
            for(let i = highestNum; i >= 0; i--){
                window.clearTimeout(i)
            }
        }, 0)
        setTimeout(()=>{
            const arrayLines= document.getElementsByClassName("array-line") as HTMLCollectionOf<HTMLElement>
            for(let i = 0; i < arrayLines.length; i++){
                arrayLines[i].classList.remove("bg-red-400")
                arrayLines[i].classList.add("bg-teal-400")                
            }
        }, 0)
    };

    const runAnimation= (animations: AnimationType)=>{
        setIsSorting(true)
        const inverseSpeed= (1/animationSpeed)*200
        const arrayLines= document.getElementsByClassName("array-line") as HTMLCollectionOf<HTMLElement>

        const updateClass=(
            indexes: number[],
            addClassName: string,
            removeClassName: string
            )=>{
                indexes.forEach((index)=>{
                    arrayLines[index].classList.add(addClassName)
                    arrayLines[index].classList.remove(removeClassName)
                })
        }
        const updateHeight=(
            lineIndex: number,
            newHeight: number | undefined
        )=>{
            if(newHeight == undefined) return
            arrayLines[lineIndex].style.height= `${newHeight}px`
        }

        animations.forEach((animation, index)=>{
            setTimeout(()=>{
                const [values, isSwap]= animation
                if(!isSwap){
                    updateClass(values, "bg-red-800", "bg-teal-400")
                    setTimeout(()=>{ updateClass(values, "bg-teal-400", "bg-red-800") }, inverseSpeed)
                } else {
                    const [lineIndex, newHeight]= values
                    updateHeight(lineIndex, newHeight)
                }
            }, index * inverseSpeed)
        })
    }

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
        runAnimation,
        resetRequired
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