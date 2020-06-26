import styles from './Board.module.css'

// local state
// create a 2D matrix/array
// board has the grid and the controls?
// let's assume board = grid

import { useState } from "react"
import deepcopy from 'deepcopy'
import produce from 'immer'
import { Button } from './Button'

function buildGrid(rows, cols) {
  return Array(rows).fill(Array(cols).fill(0))
}

const numRows = 25,
      numCols = 25

// function toggleCell(i,j) {

// }

export default function Board() {
  const [isRunning, setIsRunning] = useState(false)

  const [grid, setGrid] = useState(buildGrid(numRows, numCols))

  // console.log(grid)

  // phase 1: re-assign the whole grid on a single, manual toggle

  return (
    <>
    <button
      onClick={() => setIsRunning(!isRunning)}
    >
      {isRunning ? "Stop" : "Start"}
    </button>
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
              onClick={() => {
                const gridBuffer = produce(grid, newGrid => {
                  newGrid[i][j] = Number(!grid[i][j])
                })
                setGrid(gridBuffer)
              }}
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