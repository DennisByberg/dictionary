const mockedWord: IDictionaryApiResponse[] = [
  {
    word: "hello",
    phonetic: "/həˈləʊ/",
    phonetics: [
      {
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3",
      },
      {
        text: "/həˈləʊ/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3",
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition: '"Hello!" or an equivalent greeting.',
          },
        ],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: 'To greet with "hello".',
          },
        ],
      },
    ],
  },
];

export { mockedWord };
