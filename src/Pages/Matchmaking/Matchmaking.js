import React from 'react'
import { EnemyBoard } from '../../Components/EnemyBoard/EnemyBoard'
import YourBoard from '../../Components/YourBoard'
import classes from './Matchmaking.module.scss'

export const Matchmaking = ({ ships, setShips }) => {
  return (
    <div className={classes.container}>
      <YourBoard ships={ships} setShips={setShips} />
      <EnemyBoard ships={ships} setShips={setShips} />
    </div>
  )
}
