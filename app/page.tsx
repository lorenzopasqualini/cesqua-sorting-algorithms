'use client'
import { useSortingContext } from "@/components/context/Viz";
import { useEffect } from "react";

export default function Home() {
  const { arrayToSort, isSorting }= useSortingContext()

  useEffect(()=>{},[])

  return (
    <div>viz</div>
  );
}
