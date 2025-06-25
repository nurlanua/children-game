import React from 'react'
import GridSquare from './GridSquare'

// Represents a 10 x 10 grid of grid squares

export default function GridBoard() {

  // generates an array of 10 rows, each containing 10 GridSquares.
    const rows = 10;
    const cols = 10;

    const numberGrid: number[][] = []
    const randomInt = (min: number, max: number) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
    
    for (let row = 0; row < rows; row ++) {
        const rowArray: number[] = [];
        for (let col = 0; col < cols; col ++) {
            rowArray.push(randomInt(0,4));
        }
        numberGrid.push(rowArray);
    }

    const targetNumber = numberGrid[0][0];
    const grid: JSX.Element[][] = [];

    for (let row = 0; row < rows; row++){
        grid.push([]);
        for (let col = 0; col < cols; col++){
            const currentNumber = numberGrid[row][col];

            const isTarget = (row === 0 && col === 0) ||
                (row === 1 && col === 0 && numberGrid[row][col] === targetNumber) || // bottom
                (row === 0 && col === 1 && numberGrid[row][col] === targetNumber);   // right

            const color = isTarget ? "1":"0";

            grid[row].push(
                <GridSquare
                  key={`${col}${row}}`}
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
    )
}