import { ReactNode, createContext, useReducer } from "react";
import favoritedWordReducer from "./FavoriteWordReducer";

export const FavoriteWord = createContext<IFavWord[] | [] | any>([]); // TODO (Om tid finns): Inte använda any här...

function FavoriteWordContextProvider({ children }: { children: ReactNode }) {
  const [favoritedWord, favoritedWordDispatcher] = useReducer(
    favoritedWordReducer,
    []
  );

  return (
    <FavoriteWord.Provider
      value={{
        favoritedWord: favoritedWord,
        dispatch: favoritedWordDispatcher,
      }}
    >
      {children}
    </FavoriteWord.Provider>
  );
}

export default FavoriteWordContextProvider;
