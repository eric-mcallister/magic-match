import React from 'react';
import { useState } from 'react';
import SingleCard from './components/SingleCard'
import './App.css';

import cover from 'https://github.com/iamshaunjp/React-Firebase/blob/lesson-58/magic-memory/public/img/cover.png'

const cardImages = [
  { "src": "https://raw.githubusercontent.com/iamshaunjp/React-Firebase/lesson-58/magic-memory/public/img/helmet-1.png"},
  { "src": "https://raw.githubusercontent.com/iamshaunjp/React-Firebase/lesson-58/magic-memory/public/img/potion-1.png"},
  { "src": "https://raw.githubusercontent.com/iamshaunjp/React-Firebase/lesson-58/magic-memory/public/img/ring-1.png"},
  { "src": "https://raw.githubusercontent.com/iamshaunjp/React-Firebase/lesson-58/magic-memory/public/img/scroll-1.png"},
  { "src": "https://raw.githubusercontent.com/iamshaunjp/React-Firebase/lesson-58/magic-memory/public/img/shield-1.png"},
  { "src": "https://raw.githubusercontent.com/iamshaunjp/React-Firebase/lesson-58/magic-memory/public/img/sword-1.png"}
]

export default function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setCards(shuffledCards)
    setTurns(0)
  }

  // handle a choice
  const handleChoice = (card) => {
    //If choiceOne is null then it will be false then run setChoiceOne
    //If choiceOne is not null then it will be true and run setChoiceTwo
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map(card => 
          <SingleCard 
            card={card} 
            key={card.id} 
            handleChoice={handleChoice}
          />
        )}
      </div>
    </div>
  );
}
