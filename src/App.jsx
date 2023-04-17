import { useState } from 'react';
import Card from './components/Card';
import shuffle from './utilities/shuffle';
import './App.css';

function App() {
  const [cards, setCards] = useState(shuffle);

  return (
    <>
      <div className="grid">
        {cards.map((c) => {
          // parameterize
          const { image, id, isMatched } = c;
          console.log(image, id, c);
          return (
            <Card
              key={id}
              image={image}
              selected={false}
              onClick={()=>{}}
            />
          )})
        }
      </div>
    </>
  );
}

export default App;
