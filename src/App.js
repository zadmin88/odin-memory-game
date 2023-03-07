import './App.css'
import { useState, useEffect } from 'react'
import Score from './components/Score'
import card1 from './images/1.svg'
import card2 from './images/2.svg'
import card3 from './images/3.svg'
import card4 from './images/4.svg'
import card5 from './images/5.svg'
import card6 from './images/6.svg'
import card7 from './images/7.svg'
import card8 from './images/8.svg'
import card9 from './images/9.svg'
import card10 from './images/10.svg'
import card11 from './images/11.svg'
import card12 from './images/12.svg'
import Cards from './components/Cards'

function App() {
  const [curr, setCurr] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [cards, setCards] = useState([])

  const initialState = [
    { src: card1, clicked: false },
    { src: card2, clicked: false },
    { src: card3, clicked: false },
    { src: card4, clicked: false },
    { src: card5, clicked: false },
    { src: card6, clicked: false },
    { src: card7, clicked: false },
    { src: card8, clicked: false },
    { src: card9, clicked: false },
    { src: card10, clicked: false },
    { src: card11, clicked: false },
    { src: card12, clicked: false },
  ]

  useEffect(() => {
    setCards(initialState)
  }, [])

  return (
    <div className='App'>
      <h1>Memory Game</h1>
      <p>Try to click all icons without repeat any click!</p>
      <Score curr={curr} maxScore={maxScore} />
      <Cards
        cards={cards}
        setCards={setCards}
        setMaxScore={setMaxScore}
        setCurr={setCurr}
        initialState={initialState}
        maxScore={maxScore}
        curr={curr}
      />
    </div>
  )
}

export default App
