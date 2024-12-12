import React, { useState } from 'react'
import Square from './Square'

function Board() {

  const [selectedValue, setSelectedValue] = useState(Array(9).fill(null))
  const [isXTurn, setIsXTrun] = useState(true)

  const checkWinner = () => {
    const sequences = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let sequence of sequences) {
      const [a, b, c] = sequence;
      if (selectedValue[a] && selectedValue[a] === selectedValue[b] && selectedValue[a] === selectedValue[c]) {
        return selectedValue[a];
      } 
    }

    return null;
  };

  const won = checkWinner()


  const handleClick = (index) => {

    const prev = [...selectedValue]

    prev[index] = isXTurn ? "X" : "O";
    setSelectedValue(prev)
    setIsXTrun(!isXTurn);
  }

  const handleRest = () => {

    setSelectedValue(Array(9).fill(null))

  }


  return (
    <div className="container  mx-auto flex items-center justify-center min-h-screen bg-gray-600">
      <div>
        {!won && (
          <div className="flex flex-col py-1 items-center">
            <button
              onClick={handleRest}
              className="  bg-white   py-2 px-4 rounded-lg   duration-300"
            >
              Again
            </button>
            <h3 className="text-center text-2xl font-semibold text-white mt-4">
              {isXTurn ? "X" : "O"} Turn
            </h3>
          </div>
        )}

        {won ? <div className='flex gap-2'> <h1 className="text-3xl text-center font-bold text-white mb-4">{won ? "You Won" : ""}</h1>
          <button
            onClick={handleRest}
            className="bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Play Again
          </button>

        </div> :
          <div className="grid grid-cols-3 gap-4">
            <Square onClick={() => handleClick(0)} value={selectedValue[0]} />
            <Square onClick={() => handleClick(1)} value={selectedValue[1]} />
            <Square onClick={() => handleClick(2)} value={selectedValue[2]} />
            <Square onClick={() => handleClick(3)} value={selectedValue[3]} />
            <Square onClick={() => handleClick(4)} value={selectedValue[4]} />
            <Square onClick={() => handleClick(5)} value={selectedValue[5]} />
            <Square onClick={() => handleClick(6)} value={selectedValue[6]} />
            <Square onClick={() => handleClick(7)} value={selectedValue[7]} />
            <Square onClick={() => handleClick(8)} value={selectedValue[8]} />
          </div>}
      </div>
    
    </div>

  )
}

export default Board