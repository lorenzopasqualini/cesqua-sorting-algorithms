'use client'
import { Select } from "@/components/Select";
import { Slider } from "@/components/Slider";
import { useSortingContext } from "@/components/context/Viz";
import { SortingType } from "@/lib/types";
import { algorithms, getAnimation } from "@/lib/utils";
import { FaPlayCircle } from "react-icons/fa";
import { RxReset } from "react-icons/rx";

export default function Home() {
  const { arrayToSort, isSorting, animationSpeed, setAnimationSpeed, selectedAlgorithm, setSelectedAlgorithm, resetRequired, resetArray, runAnimation }= useSortingContext()

  const handleSelect= (e: React.ChangeEvent<HTMLSelectElement>)=>{
    setSelectedAlgorithm(e.target.value as SortingType)
  }
  const handlePlay= ()=>{
    if(resetRequired){
      resetArray()
      return
    }
    getAnimation(selectedAlgorithm, isSorting, arrayToSort, runAnimation)
  }

  return (
    <main className="absolute top-0 h-screen w-screen">
      <div className="flex h-full justify-center">
        <div id="contcont" className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4">
          <div className="h-[66px] relative flex items-center justify-between w-full">
            <h1 className="hidden md:flex">Sorting Viz</h1>
            <div className="flex items-center justify-center gap-4">
              <Slider
                value={animationSpeed}
                handleChange={(e)=> setAnimationSpeed(Number(e.target.value))}
                disabled={isSorting}
              />
              <Select
                options={algorithms}
                defaultValue={selectedAlgorithm}
                onChange={handleSelect}
                disabled={isSorting}
              />
              <button className="flex items-center justify-end" onClick={handlePlay}>
                {resetRequired ? <RxReset className="h-8 w-8" /> : <FaPlayCircle className="h-8 w-8" /> }
              </button>
            </div>
          </div>
          <div className="relative h-[calc(100vh-66px)] w-full">
            <div className="absolute bottom-[32px] w-full mx-auto left-0 right-0 flex justify-center items-end">
              {arrayToSort.map((value, index)=>(
                <div
                  key={index}
                  className="array-line bg-teal-400 relative w-1 mx-0.5 shadow-lg rounded-lg"
                  style={{height: `${value}px`}}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
