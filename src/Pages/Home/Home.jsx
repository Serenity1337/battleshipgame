import React, { useState } from 'react'
import Board from '../../Components/Board'
import classes from './Home.module.scss'
import Ship from '../../Components/Ship'
import { Navigate } from 'react-router'

export const Home = ({ ships, setShips }) => {
  const [shipPart, setShipPart] = useState(null)
  const [canPlay, setCanPlay] = useState(false)
  const [currentShip, setCurrentShip] = useState(null)

  const goToGame = () => {
    let canPlayBool = true
    ships.forEach((ship) => {
      if (ship.tiles.length === 0) {
        canPlayBool = false
        return
      }
    })
    setCanPlay(canPlayBool)
  }
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
      <div className={classes.menu}>
        <button type='button' onClick={goToGame} className={classes.playBtn}>
          Play
        </button>
      </div>
      {canPlay ? <Navigate to='/matchmaking' /> : null}
    </div>
  )
}
