'use client'
import { useSortingContext } from "@/components/context/Viz";
import { useEffect } from "react";

export default function Home() {
  const { arrayToSort, isSorting }= useSortingContext()

  useEffect(()=>{},[])

  return (
    <main className="absolute top-0 h-screen w-screen">
      <div className="flex h-full justify-center">
        <div id="contcont" className="flex max-w-[1020px] w-full flex-col lg:px-0 px-4">
          <div className="h-[66px] relative flex items-center justify-between w-full">
            <h1 className="text-teal-300 text-2xl font-light hidden md:flex">Sorting Viz</h1>
            <div>Controls</div>
          </div>
          <div className="relative h-[calc(100vh-66px)] w-full">
            <div className="absolute bottom-[32px] w-full mx-auto left-0 right-0 flex justify-center items-end">
              {arrayToSort.map((value, index)=>(
                <div
                  key={index}
                  className="relative w-1 mx-0.5 shadow-lg opacity-60 rounded-lg"
                  style={{height: `${value}px`, backgroundColor: 'teal'}}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
