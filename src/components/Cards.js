import React from 'react'

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
      setCurr(0)
      setCards(initialState)
    }
  }

  return (
    <div>
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
