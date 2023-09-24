import { useContext } from "react";
import "./DisplayFavorites.scss";
import { FavoriteWord } from "../../context/FavoriteWordContextProvider.tsx";
import { v4 as getNewUniqueID } from "uuid";
import deletePNG from "../../assets/images/delete.png";

interface IFavoriteWord {
  id: string;
  favoritedWord: IDictionaryApiResponse[];
}

function DisplayFavorites() {
  const { favoritedWord, dispatch } = useContext(FavoriteWord);
  console.log(favoritedWord[0]);

  function handleDelete(id: string) {
    dispatch({ type: "delete", payload: id });
  }

  return (
    <div className="display-favorites">
      <h1>Favorites</h1>
      <section className="card-section">
        {favoritedWord.length === 0 ? (
          <p className="card-section__no-favorites-txt">
            No favorites at the moment...
          </p>
        ) : (
          <ul>
            {favoritedWord.map((favWord: IFavoriteWord) => (
              <li key={getNewUniqueID()} className="card-section__card">
                {/* DELETE */}
                <img
                  onClick={() => handleDelete(favWord.id)}
                  className="card-section__deletePNG"
                  src={deletePNG}
                  alt="delete"
                />
                {/* WORD */}
                <h2 className="card-section__word">
                  {favWord.favoritedWord[0].word}
                </h2>
                {/* PHONETIC */}
                <p className="card-section__phonetic">
                  ({" "}
                  <span className="card-section__phonetic-span">
                    {favWord.favoritedWord[0].phonetic
                      ? favWord.favoritedWord[0].phonetic
                      : "No phonetic available"}
                  </span>{" "}
                  )
                </p>
                {/* MEANINGS */}
                <section className="card-section__all-meanings">
                  {favWord.favoritedWord[0].meanings.map((meaning) => (
                    <div
                      className="card-section__meaning"
                      key={getNewUniqueID()}
                    >
                      <p className="card-section__meaning__part-of-speech">
                        {meaning.partOfSpeech}
                      </p>
                      {meaning.definitions
                        .slice(0, 3)
                        .map((definition, index) => (
                          <div
                            className="card-section__meaning__definition"
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
                <section className="card-section__audio">
                  {favWord.favoritedWord[0].phonetics.map(
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
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default DisplayFavorites;
