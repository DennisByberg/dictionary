interface ISearchbarProps {
  setWordObject: any;
}

interface IDisplaySearchListProps {
  wordObject: IDictionaryApiResponse[];
}

interface IDictionaryApiResponse {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Definition[];

  // error...
  title: string;
  message: string;
  resoluting: string;
}

interface Phonetic {
  audio: string;
  text: string;
}

interface Definition {
  partOfSpeech: string;
  definitions: {
    definition: string;
    // synonyms: string[];
    // antonyms: string[];
    example?: string;
  }[];
  //   synonyms: string[];
  //   antonyms: string[];
}
