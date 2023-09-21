import { useContext, useEffect, useState } from "react";
import "./WordList.scss";
import { v4 as uuidv4 } from "uuid";
import { FavoriteWord } from "../../context/FavoriteWordContextProvider.js";
import favoriteStarPNG from "../../assets/images/favorite-star.png";
import notFavoriteStarPNG from "../../assets/images/not-favorite-star.png";

function WordList({ wordObject }: IWordListProps) {
  const { dispatch } = useContext(FavoriteWord);
  const [errorMessage, setErrorMessage] = useState<string>("");

  function addToFavorites(wordObject: IDictionaryApiResponse[]) {
    dispatch({ type: "added", payload: wordObject });
  }

  useEffect(() => {
    if (!wordObject)
      setErrorMessage(
        "Sorry pal, we couldn't find definitions for the word you were looking for."
      );
  });

  return (
    <div className="word-list">
      {Array.isArray(wordObject) && wordObject.length > 0 ? (
        wordObject.map((word) => (
          <div key={uuidv4()} className="word-list__card">
            <img
              src={notFavoriteStarPNG}
              onClick={() => addToFavorites(wordObject)}
            ></img>
            {/* WORD */}
            <h2 className="word-list__word">{word.word}</h2>
            {/* PHONETIC */}
            <p className="word-list__phonetic">
              (
              <span className="word-list__phonetic-span">
                {word.phonetic ? word.phonetic : "No phonetic available"}
              </span>{" "}
              )
            </p>
            {/* MEANINGS */}
            <section className="word-list__all-meanings">
              {word.meanings.map((meaning) => (
                <div className="word-list__meaning" key={uuidv4()}>
                  <p className="word-list__meaning__part-of-speech">
                    {meaning.partOfSpeech}
                  </p>
                  {meaning.definitions.slice(0, 3).map((definition, index) => (
                    <div
                      className="word-list__meaning__definition"
                      key={uuidv4()}
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
            <section className="word-list__audio">
              {word.phonetics.map(
                (phonetic) =>
                  phonetic.audio && (
                    <audio key={uuidv4()} src={phonetic.audio} controls></audio>
                  )
              )}
            </section>
          </div>
        ))
      ) : (
        <p>{errorMessage}</p>
      )}
    </div>
  );
}

export default WordList;
