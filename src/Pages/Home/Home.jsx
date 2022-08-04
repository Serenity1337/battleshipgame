import React, { useState } from 'react'
import Board from '../../Components/Board'
import classes from './Home.module.scss'
import Ship from '../../Components/Ship'

export const Home = () => {
  const [shipPart, setShipPart] = useState(null)
  const [currentShip, setCurrentShip] = useState(null)
  const [ships, setShips] = useState([
    { title: 'destroyer-1', size: 1, tiles: [] },
    { title: 'destroyer-2', size: 1, tiles: [] },
    { title: 'destroyer-3', size: 1, tiles: [] },
    { title: 'destroyer-4', size: 1, tiles: [] },
    { title: 'submarine-1', size: 2, tiles: [] },
    { title: 'submarine-2', size: 2, tiles: [] },
    { title: 'submarine-3', size: 2, tiles: [] },
    { title: 'cruiser-1', size: 3, tiles: [] },
    { title: 'cruiser-2', size: 3, tiles: [] },
    { title: 'battleship', size: 4, tiles: [] },
  ])
  return (
    <div className={classes.container}>
      <div className={classes.shipContainer}>
        {ships.map((ship, index) => (
          <Ship
            ship={ship}
            shipIndex={index}
            setShipPart={setShipPart}
            setCurrentShip={setCurrentShip}
          />
        ))}
      </div>
      <Board
        shipPart={shipPart}
        currentShip={currentShip}
        setShips={setShips}
        ships={ships}
      />
    </div>
  )
}
