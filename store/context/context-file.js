import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})

function FavoritesContextProvider({children}){
    const [favoriteCardIds, setFavoriteCardIds] = useState([]);
    console.log("favoriteCardIds: ", favoriteCardIds);
    

    function addFavorite(id){
        setFavoriteCardIds((currentFavIds) => [...currentFavIds, id]);
    }

    function removeFavorite(id){
        setFavoriteCardIds((currentFavIds) => 
        currentFavIds.filter((mealId)=> mealId !== id)
    );
    };

    const value ={
        ids: favoriteCardIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    console.log("value: ", value);
    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;