import React from 'react'
import classes from './YourBoard.module.scss'
export const YourBoard = ({ shipPart, currentShip, ships, setShips }) => {
  const rows = new Array(10).fill('')
  const columns = new Array(10).fill('')

  const decideTileClasses = (rowIndex, columnIndex) => {
    const tiles = []
    let tileClass = classes.boardTile
    ships.forEach((ship) => {
      if (ship.tiles.length > 0) {
        ship.tiles.map((tile) => {
          tiles.push(tile)
        })
      }
    })
    tiles.map((tile) => {
      if (tile[0] === rowIndex && tile[1] === columnIndex)
        tileClass = classes.shipTile
    })
    return tileClass
  }
  return (
    <div className={classes.boardContainer}>
      <div className={classes.board}>
        {rows.map((row, rowIndex) =>
          columns.map((column, columnIndex) => (
            <div className={decideTileClasses(rowIndex, columnIndex)}></div>
          ))
        )}
      </div>
    </div>
  )
}
