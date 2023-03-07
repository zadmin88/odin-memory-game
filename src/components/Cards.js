import React from 'react'
import '../styles/card.css'

const Cards = ({
  cards,
  setCards,
  setMaxScore,
  setCurr,
  initialState,
  maxScore,
  curr,
}) => {
  const handleClick = (id, clicked) => () => {
    if (!clicked) {
      setCurr((prevState) => prevState + 1)
      const newCards = cards.map((card) => {
        if (card.src === id) {
          return { ...card, clicked: true }
        }
        return card
      })

      setCards(newCards.sort((a, b) => 0.5 - Math.random()))
    } else {
      if (curr > maxScore) setMaxScore(curr)
      if (maxScore === 12) {
        setCards(initialState)
      }
      setCurr(0)
      setCards(initialState)
    }
  }

  return (
    <div className='cards'>
      {cards.map((card) => {
        return (
          <div
            className='card'
            key={card.src}
            onClick={handleClick(card.src, card.clicked)}
          >
            <img src={card.src} alt='Card' />
          </div>
        )
      })}
    </div>
  )
}

export default Cards
