import { useState } from 'react';
import Card from './components/Card';
import shuffle from './utilities/shuffle';

function App() {
  const [cards, setCards] = useState(shuffle); // Cards array from assets
  const [pickOne, setPickOne] = useState(null); // First selection
  const [pickTwo, setPickTwo] = useState(null); // Second selection
  const [disabled, setDisabled] = useState(false); // Delay handler

  const handleClick = (card) => {
    if (!disabled) {
      pickOne ? setPickTwo(card) : setPickOne(card);
    }
  };

  return (
    <>
      <div className='grid'>
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
