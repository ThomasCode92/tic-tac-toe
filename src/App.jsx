import { useState } from 'react';

import GameBoard from './components/GameBoard';
import Player from './components/Player';
import Log from './components/Log';

export default function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIdx, colIdx) {
    setActivePlayer(prevActivePlayer => (prevActivePlayer === 'X' ? 'O' : 'X'));
    setGameTurns(prevTurns => {
      const square = { row: rowIdx, col: colIdx };
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X')
        currentPlayer = 'O';

      const updatedTurns = [{ square, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} />
      </div>
      <Log />
    </main>
  );
}
