import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Matchmaking from './Pages/Matchmaking'
import { useState } from 'react'
function App() {
  const [ships, setShips] = useState([
    { title: 'destroyer-1', size: 1, tiles: [[1, 9]] },
    { title: 'destroyer-2', size: 1, tiles: [[2, 2]] },
    { title: 'destroyer-3', size: 1, tiles: [[2, 5]] },
    { title: 'destroyer-4', size: 1, tiles: [[6, 8]] },
    {
      title: 'submarine-1',
      size: 2,
      tiles: [
        [8, 8],
        [8, 9],
      ],
    },
    {
      title: 'submarine-2',
      size: 2,
      tiles: [
        [9, 5],
        [9, 6],
      ],
    },
    {
      title: 'submarine-3',
      size: 2,
      tiles: [
        [6, 5],
        [6, 6],
      ],
    },
    {
      title: 'cruiser-1',
      size: 3,
      tiles: [
        [5, 1],
        [5, 2],
        [5, 3],
      ],
    },
    {
      title: 'cruiser-2',
      size: 3,
      tiles: [
        [7, 0],
        [7, 1],
        [7, 2],
      ],
    },
    {
      title: 'battleship',
      size: 4,
      tiles: [
        [9, 0],
        [9, 1],
        [9, 2],
        [9, 3],
      ],
    },
  ])
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={<Home ships={ships} setShips={setShips} />}
        ></Route>
        <Route
          path='/matchmaking'
          element={<Matchmaking ships={ships} setShips={setShips} />}
        ></Route>
      </Routes>
    </div>
  )
}

export default App
