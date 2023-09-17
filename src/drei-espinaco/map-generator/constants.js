export const MAP_DATA = `
XXXXXXXX    X.    X.   X            XXXXXXXX
XX    XX    X.    X.   X           X     X X 
XX.         X.    X.   XXXXXXX    XXXXXXX  X    
XX    XX.   X.    X.   X.    X.   X.    X. X
XXXXXXXX.   XXXXXXX.   XXXXXXX.   XXXXXXXX  
`
export const HORIZONTAL_UNIT = 100
export const VERTICAL_UNIT = 100
export const MAP = MAP_DATA.split("\n")
export const ZSIZE = MAP.length * HORIZONTAL_UNIT
// TODO: Seleccionar el map[i] que tenga el tamaño mas largo de todos
export const XSIZE = MAP[0].length * HORIZONTAL_UNIT
