import React from 'react'
import classes from './Board.module.scss'
export const Board = ({ shipPart, currentShip, ships, setShips }) => {
  const rows = new Array(10).fill('')
  const columns = new Array(10).fill('')

  const handleDrop = (rowIndex, columnIndex, e) => {
    e.stopPropagation()
    const foundIndex = ships.findIndex(
      (currShip) => currShip.title === currentShip.title
    )
    const shipsClone = [...ships]
    let shipTiles = []
    if (currentShip.size === 1) {
      shipTiles.push([rowIndex, columnIndex])
    }
    if (currentShip.size === 2) {
      if (Number(shipPart) < 2) {
        shipTiles.push([rowIndex, columnIndex])
        shipTiles.push([rowIndex, columnIndex + 1])
      } else {
        shipTiles.push([rowIndex, columnIndex - 1])
        shipTiles.push([rowIndex, columnIndex])
      }
    }
    if (currentShip.size === 3) {
      if (Number(shipPart) === 1) {
        shipTiles.push([rowIndex, columnIndex])
        shipTiles.push([rowIndex, columnIndex + 1])
        shipTiles.push([rowIndex, columnIndex + 2])
      }
      if (Number(shipPart) === 2) {
        shipTiles.push([rowIndex, columnIndex - 1])
        shipTiles.push([rowIndex, columnIndex])
        shipTiles.push([rowIndex, columnIndex + 1])
      }
      if (Number(shipPart) === 3) {
        shipTiles.push([rowIndex, columnIndex - 2])
        shipTiles.push([rowIndex, columnIndex - 1])
        shipTiles.push([rowIndex, columnIndex])
      }
    }
    if (currentShip.size === 4) {
      if (Number(shipPart) === 1) {
        shipTiles.push([rowIndex, columnIndex])
        shipTiles.push([rowIndex, columnIndex + 1])
        shipTiles.push([rowIndex, columnIndex + 2])
        shipTiles.push([rowIndex, columnIndex + 3])
      }
      if (Number(shipPart) === 2) {
        shipTiles.push([rowIndex, columnIndex - 1])
        shipTiles.push([rowIndex, columnIndex])
        shipTiles.push([rowIndex, columnIndex + 1])
        shipTiles.push([rowIndex, columnIndex + 2])
      }
      if (Number(shipPart) === 3) {
        shipTiles.push([rowIndex, columnIndex - 2])
        shipTiles.push([rowIndex, columnIndex - 1])
        shipTiles.push([rowIndex, columnIndex])
        shipTiles.push([rowIndex, columnIndex + 1])
      }
      if (Number(shipPart) === 4) {
        shipTiles.push([rowIndex, columnIndex - 3])
        shipTiles.push([rowIndex, columnIndex - 2])
        shipTiles.push([rowIndex, columnIndex - 1])
        shipTiles.push([rowIndex, columnIndex])
      }
    }

    const canPlace = canPlaceShip(ships, shipTiles)
    if (canPlace) {
      console.log('can place')
      shipsClone[foundIndex].tiles = shipTiles
      setShips(shipsClone)
    }
    console.log(ships)
  }
  const handleDragStart = (e) => {
    e.stopPropagation()
  }
  const handleDragEnter = (rowIndex, columnIndex, e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragOver = (rowIndex, columnIndex, e) => {
    e.preventDefault()
    e.stopPropagation()
  }
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
  const canPlaceShip = (ships, shipTiles) => {
    const tiles = []
    let answer = true
    ships.forEach((ship) => {
      if (ship.tiles.length > 0) {
        ship.tiles.map((tile) => {
          tiles.push(tile)
        })
      }
    })

    if (tiles.length === 0) {
      shipTiles.forEach((shipTile) => {
        if (
          shipTile[0] < 0 ||
          shipTile[1] < 0 ||
          shipTile[0] > 9 ||
          shipTile[1] > 9
        ) {
          answer = false
        }
      })
    } else {
      shipTiles.forEach((shipTile) => {
        tiles.forEach((existingTile) => {
          console.log(shipTile)
          if (
            (existingTile[0] === shipTile[0] &&
              existingTile[1] === shipTile[1]) ||
            (existingTile[0] + 1 === shipTile[0] &&
              existingTile[1] + 1 === shipTile[1]) ||
            (existingTile[0] - 1 === shipTile[0] &&
              existingTile[1] - 1 === shipTile[1]) ||
            (existingTile[0] === shipTile[0] &&
              existingTile[1] + 1 === shipTile[1]) ||
            (existingTile[0] + 1 === shipTile[0] &&
              existingTile[1] === shipTile[1]) ||
            (existingTile[0] - 1 === shipTile[0] &&
              existingTile[1] === shipTile[1]) ||
            (existingTile[0] - 1 === shipTile[0] &&
              existingTile[1] + 1 === shipTile[1]) ||
            (existingTile[0] === shipTile[0] &&
              existingTile[1] - 1 === shipTile[1]) ||
            (existingTile[0] + 1 === shipTile[0] &&
              existingTile[1] - 1 === shipTile[1]) ||
            shipTile[0] < 0 ||
            shipTile[1] < 0 ||
            shipTile[0] > 9 ||
            shipTile[1] > 9
          ) {
            answer = false
            return
          }
        })
      })
    }

    return answer
  }
  return (
    <div className={classes.boardContainer}>
      <div className={classes.board}>
        {rows.map((row, rowIndex) =>
          columns.map((column, columnIndex) => (
            <div
              className={decideTileClasses(rowIndex, columnIndex)}
              onDragOver={(e) => handleDragOver(rowIndex, columnIndex, e)}
              onDragEnter={(e) => handleDragEnter(rowIndex, columnIndex, e)}
              onDragLeave={(e) => handleDragLeave(e)}
              onDrop={(e) => handleDrop(rowIndex, columnIndex, e)}
            ></div>
          ))
        )}
      </div>
    </div>
  )
}
