import { useMemo } from "react"
import { HORIZONTAL_UNIT, VERTICAL_UNIT, XSIZE, ZSIZE } from "./constants"
import * as THREE from "three"

export default function ObjectGenerator({ type, row, col }) {
  const { z, x } = useMemo(
    () => ({
      z: (row + 1) * HORIZONTAL_UNIT - ZSIZE * 0.5,
      x: (col + 1) * HORIZONTAL_UNIT - XSIZE * 0.5,
    }),
    [HORIZONTAL_UNIT],
  )
  switch (type) {
    case " ":
      return
    case "X":
      return (
        <mesh
          position={[x, VERTICAL_UNIT * 0.5, z]}
          geometry={new THREE.BoxBufferGeometry(HORIZONTAL_UNIT, VERTICAL_UNIT, HORIZONTAL_UNIT)}
          material={new THREE.MeshPhongMaterial({ color: Math.random() * 0xffffff })}></mesh>
      )
    default:
      return
  }
  return
}
