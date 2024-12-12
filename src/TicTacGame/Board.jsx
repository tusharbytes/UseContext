import React, { useState } from 'react';
import Square from './Square';

function Board() {
  const [gameType, setGameType] = useState(false);
  const [threeBox, setThreeBox] = useState(Array(9).fill(null));
  const [selectedValue, setSelectedValue] = useState(Array(16).fill(null));
  const [isXTurn, setIsXTrun] = useState(true);

  // 4x4 game winner logic
  const checkWinner = () => {
    const sequences = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [3, 6, 9, 12],
    ];

    for (let sequence of sequences) {
      const [a, b, c, d] = sequence;
      if (
        selectedValue[a] &&
        selectedValue[a] === selectedValue[b] &&
        selectedValue[a] === selectedValue[c] &&
        selectedValue[a] === selectedValue[d]
      ) {
        return selectedValue[a];
      }
    }
    return null;
  };

  const won = checkWinner();

  const handleClick = (index) => {
    if (selectedValue[index] || won) return;

    const updatedValue = [...selectedValue];
    updatedValue[index] = isXTurn ? 'X' : 'O';
    setSelectedValue(updatedValue);
    setIsXTrun(!isXTurn);


    if (!checkWinner() && updatedValue.every((cell) => cell !== null)) {
      setTimeout(() => {
        alert('No winner. Game will reset!');
        setSelectedValue(Array(16).fill(null));
      }, 200);
    }
  };



  const handleReset = () => {
    setSelectedValue(Array(16).fill(null));
  };

  // 3x3 game logic
  const handleThreeClick = (index) => {
    if (threeBox[index] || winnerThreeBoxes()) return;

    const updatedThreeBox = [...threeBox];
    updatedThreeBox[index] = isXTurn ? 'X' : 'O';
    setThreeBox(updatedThreeBox);
    setIsXTrun(!isXTurn);

    // Reset game if all cells are filled and no winner
    if (!winnerThreeBoxes() && updatedThreeBox.every((cell) => cell !== null)) {
      setTimeout(() => {
        alert('No winner. Game will reset!');
        setThreeBox(Array(9).fill(null));
      }, 200);
    }
  };

  const winnerThreeBoxes = () => {
    const threePossibilities = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let possibility of threePossibilities) {
      const [a, b, c] = possibility;
      if (
        threeBox[a] &&
        threeBox[a] === threeBox[b] &&
        threeBox[a] === threeBox[c]
      ) {
        return threeBox[a];
      }
    }
    return null;
  };

  const threeBoxWinner = winnerThreeBoxes();

  const threeReset = () => {
    setThreeBox(Array(9).fill(null));
  };

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900">
      <div className="text-center">
        <p className="text-white text-2xl font-semibold flex items-center justify-center gap-4 py-4">
          Select Game Type:
          <button
            onClick={() => setGameType(false)}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-300"
          >
            3x3
          </button>
          <button
            onClick={() => setGameType(true)}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-300"
          >
            4x4
          </button>
        </p>

        {gameType ? (
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-6">Tic Tac Toe</h1>
            {!won ? (
              <div className="grid grid-cols-4 gap-4 mt-6">
                {[...Array(16)].map((_, index) => (
                  <Square
                    key={index}
                    onClick={() => handleClick(index)}
                    value={selectedValue[index]}
                  />
                ))}
              </div>
            ) : (
              <div>
                <h2 className="text-green-400 text-2xl font-bold">Winner: {won}</h2>
                <button
                  onClick={handleReset}
                  className="bg-red-600 hover:bg-red-500 text-white py-2 px-6 rounded-lg shadow-md transition duration-300"
                >
                  Restart Game
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-6">Tic Tac Toe</h1>
            {threeBoxWinner ? (
              <div>
                <h2 className="text-green-400 text-2xl font-bold">
                  Winner: {threeBoxWinner}
                </h2>
                <button
                  onClick={threeReset}
                  className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-2 rounded-full shadow-md transition duration-300"
                >
                  New Game
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, index) => (
                  <Square
                    key={index}
                    onClick={() => handleThreeClick(index)}
                    value={threeBox[index]}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Board;
