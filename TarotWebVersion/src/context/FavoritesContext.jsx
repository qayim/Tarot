import { createContext, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'tarot-favorite-ids';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: () => {},
  removeFavorite: () => {},
});

function loadFavorites() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export default function FavoritesProvider({ children }) {
  const [ids, setIds] = useState(loadFavorites);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids]);

  function addFavorite(id) {
    setIds((current) => (current.includes(id) ? current : [...current, id]));
  }

  function removeFavorite(id) {
    setIds((current) => current.filter((cardId) => cardId !== id));
  }

  return (
    <FavoritesContext.Provider value={{ ids, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
