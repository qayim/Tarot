import { useState } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import './TarotCard.css';

function PointGrid({ points, variant }) {
  const row1 = points.slice(0, 3);
  const row2 = points.slice(3, 6);

  return (
    <div>
      <div className="point-rows">
        {row1.map((point) => (
          <span key={point} className={`point-chip point-chip--${variant}`}>
            {point}
          </span>
        ))}
      </div>
      <div className="point-rows">
        {row2.map((point) => (
          <span key={point} className={`point-chip point-chip--${variant}`}>
            {point}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TarotCard({
  id,
  cardName,
  type,
  category,
  position,
  uprightPoints,
  reversedPoints,
  upDesc,
  revDesc,
}) {
  const { ids, addFavorite, removeFavorite } = useFavorites();
  const [showDesc, setShowDesc] = useState(false);
  const isFavorite = ids.includes(id);

  function toggleFavorite(event) {
    event.preventDefault();
    event.stopPropagation();
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  }

  function getContainerClass() {
    if (isFavorite) return 'tarot-card tarot-card--favorite';
    if (position === 'upright') return 'tarot-card tarot-card--upright';
    if (position === 'reversed') return 'tarot-card tarot-card--reversed';
    return 'tarot-card';
  }

  function renderBody() {
    if (showDesc) {
      return (
        <div className="tarot-card__body">
          <p className="tarot-card__label tarot-card__label--upright">Up Right</p>
          <div className="tarot-card__desc tarot-card__desc--upright">{upDesc}</div>
          <p className="tarot-card__label tarot-card__label--reversed">Reversed</p>
          <div className="tarot-card__desc tarot-card__desc--reversed">{revDesc}</div>
        </div>
      );
    }

    if (position === 'upright') {
      return (
        <div className="tarot-card__body">
          <p className="tarot-card__label tarot-card__label--upright">Up Right</p>
          <PointGrid points={uprightPoints} variant="upright" />
        </div>
      );
    }

    if (position === 'reversed') {
      return (
        <div className="tarot-card__body">
          <p className="tarot-card__label tarot-card__label--reversed">Reversed</p>
          <PointGrid points={reversedPoints} variant="reversed" />
        </div>
      );
    }

    return (
      <div className="tarot-card__body">
        <p className="tarot-card__label tarot-card__label--upright">Up Right</p>
        <PointGrid points={uprightPoints} variant="upright" />
        <p className="tarot-card__label tarot-card__label--reversed">Reversed</p>
        <PointGrid points={reversedPoints} variant="reversed" />
      </div>
    );
  }

  return (
    <article
      className={getContainerClass()}
      onClick={() => setShowDesc((current) => !current)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          setShowDesc((current) => !current);
        }
      }}
    >
      <div className="tarot-card__header">
        <div>
          <h2 className="tarot-card__name">{cardName}</h2>
          <p className="tarot-card__meta">{type}</p>
          <p className="tarot-card__meta tarot-card__meta--small">{category}</p>
        </div>
        <button
          className={`tarot-card__favorite ${isFavorite ? 'tarot-card__favorite--active' : ''}`}
          onClick={toggleFavorite}
          type="button"
          aria-label={isFavorite ? 'Remove from Reading Aid' : 'Add to Reading Aid'}
          title={isFavorite ? 'Remove from Reading Aid' : 'Add to Reading Aid'}
        >
          {isFavorite ? '★' : '☆'}
        </button>
      </div>
      {renderBody()}
    </article>
  );
}
