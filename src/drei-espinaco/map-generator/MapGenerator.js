import { useMemo } from "react"
import { MAP, MAP_DATA } from "./constants"
import ObjectGenerator from "./ObjectGenerator"

export default function MapGenerator() {
  return (
    <>
      {MAP.map((fila, i) => {
        return fila.split("").map((elemento, j) => {
          // Elemento en la posición (${i}, ${j}): ${elemento}`
          return <ObjectGenerator type={elemento} row={i} col={j} />
        })
      })}
    </>
  )
}
