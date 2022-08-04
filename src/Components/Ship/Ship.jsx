import React from 'react'
import classes from './Ship.module.scss'
export const Ship = ({ ship, setShipPart, setCurrentShip, shipIndex }) => {
  const handleDragStart = (e) => {
    e.stopPropagation()
    setCurrentShip(ship)
  }
  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDrop = (e) => {
    e.stopPropagation()
  }
  const handleMouseDown = (event) => {
    setShipPart(
      event.target.id.slice(event.target.id.length - 1, event.target.id.length)
    )
  }

  return (
    <div
      className={ship.tiles.length === 0 ? classes.ship : null}
      draggable='true'
      onDragOver={(e) => handleDragOver(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDrop(e)}
      onDragStart={(e) => handleDragStart(e)}
    >
      {new Array(ship.size).fill('').map((tile, index) => (
        <span
          className={`${classes.tile}`}
          id={`position-${index + 1}`}
          onMouseDown={handleMouseDown}
        ></span>
      ))}
    </div>
  )
}
