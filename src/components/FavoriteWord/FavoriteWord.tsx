import "./FavoriteWord.scss";
import { createContext, useReducer } from "react";

export const FavoriteWord = createContext<any>(null);

function FavoriteWordContextProvider({ children }: any) {
  const [favoritedWord, favoritedWordsDispatcher] = useReducer(
    favoritedWordReducer,
    [] // Initial state should be an array to hold favorited words
  );

  return (
    <FavoriteWord.Provider
      value={{ words: favoritedWord, dispatch: favoritedWordsDispatcher }}
    >
      {children}
    </FavoriteWord.Provider>
  );
}

// Define the initial id outside of the reducer function
let id = 1;

const favoritedWordReducer = (favoritedWord: any, action: any) => {
  console.log(favoritedWord, action);
  switch (action.type) {
    case "added":
      // When adding a new word, create a new object with an incremented id
      return [
        ...favoritedWord,
        {
          id: id++,
          words: action.payload,
        },
      ];
    case "deleted":
      // When deleting a word, filter out the word with the matching id
      return favoritedWord.filter((word: any) => word.id !== action.payload);
    default:
      return;
  }
};

export default FavoriteWordContextProvider;
