import React from 'react'

const Score = ({ curr, maxScore }) => {
  return (
    <div>
      <h2>Current Score: {curr}</h2>
      <h2>Max Score: {maxScore}</h2>
    </div>
  )
}

export default Score
