import { useState, useEffect } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import shuffle from './utilities/shuffle';
import useAppBadge from './hooks/useAppBadge';
import './App.css';

function App() {
  const [cards, setCards] = useState(shuffle);
  const [pickOne, setPickOne] = useState(null); // First selection
  const [pickTwo, setPickTwo] = useState(null); // Second selection
  const [disableUserInput, setDisabled] = useState(false); // Delay handler
  const [wins, setWins] = useState(0); // Win streak
  const [incrBadge, clearBadge] = useAppBadge();

  const handleNewGame = () => {
    setWins(0);
    clearBadge();
    resetTurn();
    setCards(shuffle);
  }
  
  const resetTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

  // Used for selection and match handling
  // basically do loop based on cards, pickOne, or pickTwo change
  useEffect(() => {
    let pickTimer;

    // Two cards have been clicked
    if (pickOne && pickTwo) {
      // Check if the cards the same
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              // Update card property to reflect match
              return { ...card, isMatched: true };
            } else {
              // No match
              return card;
            }
          });
        });
        resetTurn();
      } else {
        // Prevent new selections until after delay
        setDisabled(true);
        // Add delay between selections
        pickTimer = setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }

    return () => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo]);

  // If player has found all matches, handle accordingly
  useEffect(() => {
    // Check for any remaining card matches
    const checkWin = cards.filter((card) => !card.isMatched);

    // All matches made, handle win/badge counters
    if (cards.length && checkWin.length < 1) {
      console.log('You win!');
      setWins(wins + 1);
      incrBadge();
      resetTurn();
      setCards(shuffle);
    }
  }, [cards, incrBadge, wins]);

  // Handle card selection
  const handleClick = (card) => {
    if (!disableUserInput) {
      if (pickOne) {
        setPickTwo(card)
      }
      else {
        setPickOne(card);
      }
    }
  };

  return (
    <>
      <Header 
        handleNewGame={handleNewGame}
        wins={wins}
      />
      <div className="grid">
        {cards.map((c) => {
          // parameterize
          const { image, id, isMatched } = c;
          // console.log(image, id, c);
          return (
            <Card
              key={id}
              image={image}
              selected={c === pickOne || c === pickTwo || isMatched}
              onClick={() => handleClick(c)}
            />
          )})
        }
      </div>
    </>
  );
}

export default App;
