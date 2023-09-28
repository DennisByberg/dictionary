const mockedWords: IFavWord[] = [
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
              {
                definition: "A person:",
              },
              {
                definition:
                  "A strong tackle used to hoist an anchor to the cathead of a ship",
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
              {
                definition: "To flog with a cat-o'-nine-tails",
              },
              {
                definition: "To vomit",
              },
            ],
          },
        ],
      },
    ],
  },
];

export default mockedWords;
