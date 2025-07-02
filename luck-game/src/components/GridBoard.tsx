import React, { useEffect, useState } from 'react'
import GridSquare from './GridSquare'
import Controls from './Controls'

const maxRows = 10;
const maxCols = 10;

export default function GridBoard() {
  const [numberGrid, setNumberGrid] = useState<number[][]>([]);
  const [targetNumber, setTargetNumber] = useState<number>(0);
  const [visited, setVisited] = useState<boolean[][]>([]);
  const [hasWon, setHasWon] = useState<boolean>(false);

  // generate grid when component mounts
  useEffect(() => {
    const grid: number[][] = [];
    for (let row = 0; row < maxRows; row++) {
      const rowArray: number[] = [];
      for (let col = 0; col < maxCols; col++) {
        rowArray.push(Math.floor(Math.random() * 5));
      }
      grid.push(rowArray);
    }

    const startValue = grid[0][0];
    setNumberGrid(grid);
    setTargetNumber(grid[0][0]);
    setVisited(floodFill(grid, startValue));
  }, []);

  // flood fill function
  function floodFill(grid: number[][], startValue: number): boolean[][] {
    const visited = Array.from({ length: maxRows }, () =>
      Array(maxCols).fill(false)
    );

    function fill(r: number, c: number) {
      if (
        r < 0 || r >= maxRows ||
        c < 0 || c >= maxCols ||
        visited[r][c] ||
        grid[r][c] !== startValue
      ) return;

      visited[r][c] = true;

      fill(r + 1, c);
      fill(r - 1, c);
      fill(r, c + 1);
      fill(r, c - 1);
    }

    fill(0, 0);
    return visited;
  }


  function checkWin(grid: number[][]): boolean {
    const value = grid[0][0];
    return grid.every(row => row.every(cell => cell === value));
  }

  // update target number
  const handleChange = (newNum: number) => {
    if (numberGrid.length === 0) return;

    const newGrid = numberGrid.map(row => [...row]);
    for (let r = 0; r < maxRows; r++){
      for (let c = 0; c < maxCols; c++){
        if (visited[r][c]) {
          newGrid[r][c] = newNum;
        }
      }
    }
    setNumberGrid(newGrid);
    setTargetNumber(newNum);
    setVisited(floodFill(newGrid, newNum));

    if (checkWin(newGrid)) {
      setHasWon(true);
    }
  };

  // render grid
  const grid: JSX.Element[] = [];

  for (let row = 0; row < maxRows; row++) {
    for (let col = 0; col < maxCols; col++) {
      const currentNumber = numberGrid[row]?.[col] ?? 0;
      const isVisited = visited[row]?.[col];
      const color = isVisited ? "1" : "0";

      grid.push(
        <GridSquare
          key={`${row}-${col}`}
          color={color}
          number={currentNumber}
        />
      );
    }
  }

  return (
    <div className="App">
      <div className="grid-board">
        {grid}
      </div>
      <Controls onChange={handleChange} />
      {hasWon && (
        <div className="popup">
          You won!
        </div>
      )}
    </div>
  );
}
