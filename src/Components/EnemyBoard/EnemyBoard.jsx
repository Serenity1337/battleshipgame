import React, { useState } from 'react'
import classes from './EnemyBoard.module.scss'
export const EnemyBoard = ({ shipPart, currentShip, ships, setShips }) => {
  const initiateBoard = (ships) => {
    const board = [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
    ]
    // const board = new Array(10).fill(new Array(10).fill(''))
    const boardClone = [...board]
    ships.forEach((ship) => {
      ship.tiles.forEach((tile) => {
        boardClone[tile[0]][tile[1]] = ship.title
        // board[tile[0]] = ship.title
      })
    })
    return board
  }
  const rows = new Array(10).fill('')
  const columns = new Array(10).fill('')
  const [board, setBoard] = useState(() => {
    const initialState = initiateBoard(ships)
    return initialState
  })

  const decideTileClasses = (rowIndex, columnIndex, item) => {
    const tiles = []
    let tileClass = classes.boardTile
    const isDestroyed = item.includes('destroyed')
    const isMissed = item.includes('miss')
    if (isDestroyed) {
      tileClass = classes.destroyedTile
    }
    if (isMissed) {
      tileClass = classes.missedTile
    }
    return tileClass
  }

  const fireHandler = (rowIndex, columnIndex, item, board, setBoard) => {
    const boardClone = [...board]
    if (item === '') {
      boardClone[rowIndex][columnIndex] = 'miss'
    }
    if (item !== 'miss' && item !== '') {
      boardClone[rowIndex][columnIndex] =
        boardClone[rowIndex][columnIndex] + ' destroyed'
    }
    setBoard(boardClone)
  }
  console.log(board)
  return (
    <div className={classes.boardContainer}>
      <div className={classes.board}>
        {board.map((column, rowIndex) =>
          column.map((item, columnIndex) => (
            <div
              className={decideTileClasses(rowIndex, columnIndex, item)}
              onClick={() =>
                fireHandler(rowIndex, columnIndex, item, board, setBoard)
              }
            ></div>
          ))
        )}
      </div>
    </div>
  )
}
