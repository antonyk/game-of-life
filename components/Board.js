import styles from './Board.module.css'

// local state
// create a 2D matrix/array
// board has the grid and the controls?
// let's assume board = grid

import { useState } from "react"

function buildGrid(rows, cols) {
  return Array(rows).fill(Array(cols).fill(0))
}

const numRows = 25,
      numCols = 25

export default function Board() {

  const [grid, setGrid] = useState(buildGrid(numRows, numCols))

  console.log(grid)

  return (
    <>
    <div 
      className={styles.grid}
      style={{
        // display: grid,
        gridTemplateRows: `repeat(${numRows}, 25px)`,
        gridTemplateColumns: `repeat(${numCols}, 25px)`,
      }}

    >
      {grid.map((row,i) => row.map((cell,j) => {
          return (
            <div 
              key={`${i}${j}`}
              style={{
                width: 20,
                height: 20,
                backgroundColor: cell ? "green" : "whitesmoke",
                border: "solid 1px black"
              }}
              // className={`${styles.cell}${cell === 1 ? ' '+styles.cell_on : ''}`}
            >
            </div>
          )
        }))}
    </div>
    </>
  )


}