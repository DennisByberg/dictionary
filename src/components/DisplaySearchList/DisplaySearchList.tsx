import { useContext, useEffect, useState } from "react";
import "./DisplaySearchList.scss";
import { v4 as getNewUniqueID } from "uuid";
import { FavoriteWord } from "../../context/FavoriteWordContextProvider.js";
import favoriteStarPNG from "../../assets/images/favorite-star.png";
import notFavoriteStarPNG from "../../assets/images/not-favorite-star.png";
import { DarkModeContext } from "../../App.js";
import {
  addWordToFavorites,
  deleteWordFromFavorites,
} from "../../utils/handleFavorites";

function DisplaySearchList({ wordObject }: IDisplaySearchListProps) {
  const isDarkMode = useContext(DarkModeContext);
  const { dispatch, favoritedWord } = useContext(FavoriteWord);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Om ordet finns med i favoriter tar vi bort ordet
  // Om det inte finns med lägger vi till det i favoriter
  function handleFavoriteClick() {
    const wordObjectWord = wordObject[0].word;

    if (favoritedWord !== undefined) {
      const existingWord = favoritedWord.find(
        (word: any) => word.favoritedWord[0].word === wordObjectWord
      );

      if (existingWord) {
        deleteWordFromFavorites(existingWord.id, dispatch);
      } else {
        addWordToFavorites(wordObject, dispatch);
      }
    }
  }

  // Ändrar error meddelande om wordObjectet inte finns (mindre än 3 bokstäver eller ord som inte finns)
  useEffect(() => {
    if (!wordObject)
      setErrorMessage(
        "Sorry pal, we couldn't find definitions for the word you were looking for."
      );
  });

  return (
    <div className="display-search-list">
      {Array.isArray(wordObject) && wordObject.length > 0 ? (
        wordObject.map((word) => (
          <div
            key={getNewUniqueID()}
            className={`display-search-list__card ${
              isDarkMode ? "" : " light-mode"
            }`}
          >
            {/* FAVORITE IMG */}
            <img
              className="display-search-list__favoritePNG"
              alt="A star"
              src={
                favoritedWord !== undefined &&
                favoritedWord.find(
                  (favWord: any) =>
                    favWord.favoritedWord[0].word === wordObject[0].word
                )
                  ? favoriteStarPNG
                  : notFavoriteStarPNG
              }
              onClick={handleFavoriteClick}
            ></img>
            {/* WORD */}
            <h2 className="display-search-list__word">{word.word}</h2>
            {/* PHONETIC */}
            <p className="display-search-list__phonetic">
              (
              <span className="display-search-list__phonetic-span">
                {word.phonetic ? word.phonetic : "No phonetic available"}
              </span>{" "}
              )
            </p>
            {/* MEANINGS */}
            <section className="display-search-list__all-meanings">
              {word.meanings.map((meaning) => (
                <div
                  className="display-search-list__meaning"
                  key={getNewUniqueID()}
                >
                  <p className="display-search-list__meaning__part-of-speech">
                    {meaning.partOfSpeech}
                  </p>
                  {meaning.definitions.slice(0, 3).map((definition, index) => (
                    <div
                      className="display-search-list__meaning__definition"
                      key={getNewUniqueID()}
                    >
                      <p>
                        Definition {index + 1}: {definition.definition}
                      </p>
                      {definition.example && (
                        <p>Example: {definition.example}</p>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </section>
            {/* AUDIO */}
            <section className="display-search-list__audio">
              {word.phonetics.map(
                (phonetic) =>
                  phonetic.audio && (
                    <audio
                      key={getNewUniqueID()}
                      src={phonetic.audio}
                      controls
                      data-testid="audio-element"
                    ></audio>
                  )
              )}
            </section>
          </div>
        ))
      ) : (
        <p className="display-search-list__error-txt">{errorMessage}</p>
      )}
    </div>
  );
}

export default DisplaySearchList;
