import React from 'react'

// Represents a grid square with a color

export default function GridSquare(props: { color: any, number: number }) {
  const classes = `grid-square color-${props.color}`
  return <div className={classes}>
    {props.number}
  </div>
}