import { createContext, useReducer } from "react";
import { v4 as getNewUniqueID } from "uuid";

export const FavoriteWord = createContext<any>(null);

interface IFavoriteWord {
  id: string;
  favoritedWord: string;
}

function FavoriteWordContextProvider({ children }: any) {
  const [favoritedWord, favoritedWordsDispatcher] = useReducer(
    favoritedWordReducer,
    []
  );

  return (
    <FavoriteWord.Provider
      value={{
        favoritedWord: favoritedWord,
        dispatch: favoritedWordsDispatcher,
      }}
    >
      {children}
    </FavoriteWord.Provider>
  );
}

/**
 * Reducerfunktion
 * @param favoritedWord - Det aktuella statet
 * @param action
 * @returns - Ett nytt state baserat på handlingen
 */
function favoritedWordReducer(
  favoritedWord: IFavoriteWord[],
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case "add":
      // Kontrollerar om ordet redan finns i reducern
      const existingWord = favoritedWord.find(
        (word: any) => word.favoritedWord === action.payload
      );

      if (existingWord) {
        return favoritedWord;
      }

      return [
        ...favoritedWord,
        {
          id: getNewUniqueID(),
          favoritedWord: action.payload,
        },
      ];

    case "delete":
      return favoritedWord.filter((word) => word.id !== action.payload);

    default:
      return favoritedWord;
  }
}

export default FavoriteWordContextProvider;
