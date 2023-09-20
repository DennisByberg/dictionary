interface ISearchbarProps {
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
}

interface IWordListProps {
  searchWord: string;
}

interface IDictionaryApiResponse {
  word: string;
  phonetic?: string;
  phonetics: Phonetic[];
  meanings: Definition[];
}

interface Phonetic {
  audio: string;
  text?: string;
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
