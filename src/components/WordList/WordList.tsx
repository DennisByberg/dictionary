import { useContext, useEffect, useState } from "react";
import "./WordList.scss";
import { v4 as uuidv4 } from "uuid";
import { FavoriteWord } from "../FavoriteWord/FavoriteWord";

function WordList({ searchWord }: IWordListProps) {
  const [wordObject, setWordObject] = useState<IDictionaryApiResponse[] | []>(
    []
  );
  const { dispatch } = useContext(FavoriteWord);

  useEffect(() => {
    // TODO: Användaren kan se ett error om de söker med ett tomt sökfält.
    if (!searchWord) return;
    if (searchWord.length < 3) return;

    async function getWordInfo() {
      const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
      try {
        const response = await fetch(API_URL);
        const data: IDictionaryApiResponse[] = await response.json();

        if (data.length) {
          //   console.log([data[0]]);
          setWordObject([data[0]]);
        }
      } catch (error) {
        // console.log(error);
      }
    }
    getWordInfo();
  }, [searchWord]);

  function addToFavorites(wordObject: IDictionaryApiResponse[]) {
    dispatch({ type: "added", payload: wordObject });
  }

  return (
    <div className="word-list">
      {wordObject ? (
        wordObject.map((word) => (
          <div key={uuidv4()} className="word-list__card">
            <button onClick={() => addToFavorites(wordObject)}>
              Add To Favorite
            </button>
            {/* WORD */}
            <h2 className="word-list__word">{word.word}</h2>
            {/* PHONETIC */}
            {/* TODO: Phonetic kan finnas på ett annat ställe...? */}
            <p className="word-list__phonetic">
              ({" "}
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
        <p>No words to display</p>
      )}
    </div>
  );
}

export default WordList;
