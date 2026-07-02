import { useState } from 'react';
import { cards } from '../data/cards';
import BackButton from '../components/BackButton';
import TopBar from '../components/TopBar';
import CategoryButton from '../components/CategoryButton';
import TarotCard from '../components/TarotCard';

function drawUniqueCards(count) {
  const drawn = new Map();

  while (drawn.size < count) {
    const id = Math.floor(Math.random() * 78) + 1;
    if (drawn.has(id)) continue;

    drawn.set(id, {
      card: cards.find((entry) => entry.id === id),
      position: Math.random() < 0.5 ? 'upright' : 'reversed',
    });
  }

  return Array.from(drawn.values());
}

export default function FortuneScreen() {
  const [spread, setSpread] = useState([]);

  function startReading() {
    setSpread(drawUniqueCards(6));
  }

  return (
    <main className="screen">
      <div className="screen-content">
        <BackButton />
        <TopBar title="Fortune Telling" />
        <CategoryButton title="Start" onClick={startReading} />
        <div className="card-list">
          {spread.map(({ card, position }) => (
            <TarotCard
              key={`${card.id}-${position}`}
              id={card.id}
              cardName={card.cardName}
              type={card.cardType}
              category={card.cardCategory}
              position={position}
              uprightPoints={card.uprightPoints}
              reversedPoints={card.reversedPoints}
              upDesc={card.upDesc}
              revDesc={card.revDesc}
            />
          ))}
        </div>
        {spread.length > 0 && (
          <p className="hint">Six cards drawn · gold border = upright · silver = reversed</p>
        )}
      </div>
    </main>
  );
}
