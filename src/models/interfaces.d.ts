//--- PROPS --- //
interface ISearchbarProps {
  setWordObject: any;
}

interface IDisplaySearchListProps {
  wordObject: IDictionaryApiResponse[];
}

interface IToggleFavoritesProps {
  isFavoritesToggled: boolean;
  setIsFavoritesToggled: React.Dispatch<React.SetStateAction<boolean>>;
  setWordObject: React.Dispatch<
    React.SetStateAction<[] | IDictionaryApiResponse[]>
  >;
}

//--- API RESOONSES --- //
interface IDictionaryApiResponse {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Definition[];

  title: string; // error...
  message: string; // error...
  resoluting: string; // error...
}

//--- OTHER --- //
interface IFavoriteWord {
  id: string;
  favoritedWord: string;
}

interface IFavWord {
  id: string;
  favoritedWord: IDictionaryApiResponse[];
}

interface Phonetic {
  audio: string;
  text: string;
}

interface Definition {
  partOfSpeech: string;
  definitions: {
    definition: string;
    example?: string;
  }[];
}
