import { Link, useLocation, useParams } from 'react-router-dom';
import { cards as allCards } from '../data/cards';
import TopBar from '../components/TopBar';
import TarotCard from '../components/TarotCard';

export default function CardScreen() {
  const { category } = useParams();
  const location = useLocation();
  const cards = location.state?.cards ?? allCards;

  return (
    <main className="screen">
      <div className="screen-content">
        <Link to="/" aria-label="Back to home">
          <TopBar title={decodeURIComponent(category)} />
        </Link>
        <div className="card-list">
          {cards.length === 0 ? (
            <p className="hint">
              No cards here yet. Star some cards from any suit to build your Reading Aid.
            </p>
          ) : (
            cards.map((card) => (
              <TarotCard
                key={card.id}
                id={card.id}
                cardName={card.cardName}
                type={card.cardType}
                category={card.cardCategory}
                uprightPoints={card.uprightPoints}
                reversedPoints={card.reversedPoints}
                upDesc={card.upDesc}
                revDesc={card.revDesc}
              />
            ))
          )}
        </div>
        <p className="hint">Tap a card for full meaning · Tap ☆ to favorite</p>
      </div>
    </main>
  );
}
