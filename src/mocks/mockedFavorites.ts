const mockedFavorites: IFavWord[] = [
  {
    id: "1",
    favoritedWord: [
      {
        word: "cat",
        phonetic: "/kat/",
        phonetics: [
          {
            text: "/kat/",
            audio:
              "https://api.dictionaryapi.dev/media/pronunciations/en/cat-uk.mp3",
          },
          {
            text: "/k\u00E6t/",
            audio:
              "https://api.dictionaryapi.dev/media/pronunciations/en/cat-us.mp3",
          },
        ],
        meanings: [
          {
            partOfSpeech: "noun",
            definitions: [
              {
                definition: "An animal of the family Felidae:",
              },
            ],
          },
          {
            partOfSpeech: "verb",
            definitions: [
              {
                definition:
                  "To hoist (the anchor) by its ring so that it hangs at the cathead.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    favoritedWord: [
      {
        word: "dog",
        phonetic: "/d\u0251\u0261/",
        phonetics: [
          {
            text: "/d\u0251\u0261/",
            audio: "",
          },
          {
            text: "/d\u0252\u0261/",
            audio:
              "https://api.dictionaryapi.dev/media/pronunciations/en/dog-uk.mp3",
          },
          {
            text: "/d\u0254\u0261/",
            audio:
              "https://api.dictionaryapi.dev/media/pronunciations/en/dog-us.mp3",
          },
          {
            text: "/d\u0251\u0261/",
            audio: "",
          },
        ],
        meanings: [
          {
            partOfSpeech: "noun",
            definitions: [
              {
                definition:
                  "A mammal, Canis familiaris or Canis lupus familiaris, that has been domesticated for thousands of years, of highly variable appearance due to human breeding.",
                example: "The dog barked all night long.",
              },
            ],
          },
          {
            partOfSpeech: "verb",
            definitions: [
              {
                definition: "To pursue with the intent to catch.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default mockedFavorites;
