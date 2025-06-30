import React from 'react'
import GridSquare from './GridSquare'

const maxRows = 10;
const maxCols = 10;

export default function GridBoard() {
  const numberGrid: number[][] = [];
  const visited: boolean[][] = Array.from({ length: maxRows }, () => Array(maxCols).fill(false));

  const randomInt = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  // Generate grid of random numbers
  for (let row = 0; row < maxRows; row++) {
    const rowArray: number[] = [];
    for (let col = 0; col < maxCols; col++) {
      rowArray.push(randomInt(0, 4));
    }
    numberGrid.push(rowArray);
  }

  const targetNumber = numberGrid[0][0];

  // Flood fill function to mark matching squares
  function floodFill(row: number, col: number) {
    if (
      row < 0 || row >= maxRows ||
      col < 0 || col >= maxCols ||
      visited[row][col] ||
      numberGrid[row][col] !== targetNumber
    ) {
      return;
    }

    visited[row][col] = true;

    floodFill(row + 1, col); // down
    floodFill(row - 1, col); // up
    floodFill(row, col + 1); // right
    floodFill(row, col - 1); // left
  }

  // Start flood fill from top-left
  floodFill(0, 0);

  // Render grid
  const grid: JSX.Element[][] = [];
  for (let row = 0; row < maxRows; row++) {
    grid.push([]);
    for (let col = 0; col < maxCols; col++) {
      const currentNumber = numberGrid[row][col];
      const color = visited[row][col] ? "1" : "0";

      grid[row].push(
        <GridSquare
          key={`${col}${row}`}
          color={color}
          number={currentNumber}
        />
      );
    }
  }

  return (
    <div className='grid-board'>
      {grid}
    </div>
  );
}
