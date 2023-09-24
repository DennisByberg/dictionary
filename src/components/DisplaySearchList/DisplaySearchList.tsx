import { useContext, useEffect, useState } from "react";
import "./DisplaySearchList.scss";
import { v4 as getNewUniqueID } from "uuid";
import { FavoriteWord } from "../../context/FavoriteWordContextProvider.js";
import favoriteStarPNG from "../../assets/images/favorite-star.png";
import notFavoriteStarPNG from "../../assets/images/not-favorite-star.png";

function DisplaySearchList({ wordObject }: IDisplaySearchListProps) {
  const { dispatch, favoritedWord } = useContext(FavoriteWord);
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleFavoriteClick() {
    const wordObjectWord: string = wordObject[0].word;

    const existingWord = favoritedWord.find(
      (word: any) => word.favoritedWord[0].word === wordObjectWord
    );

    if (existingWord) {
      dispatch({ type: "delete", payload: existingWord.id });
    } else {
      dispatch({ type: "add", payload: wordObject });
      console.log(favoritedWord);
    }
  }

  // Ändrar error meddelande
  useEffect(() => {
    if (!wordObject)
      setErrorMessage(
        "Sorry pal, we couldn't find definitions for the word you were looking for."
      );
    setTimeout(() => {
      setErrorMessage("");
    }, 2000);
  });

  return (
    <div className="display-search-list">
      {Array.isArray(wordObject) && wordObject.length > 0 ? (
        wordObject.map((word) => (
          <div key={getNewUniqueID()} className="display-search-list__card">
            {/* FAVORITE IMG */}
            <img
              className="display-search-list__favoritePNG"
              src={
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
