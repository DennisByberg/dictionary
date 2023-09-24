/**
 * Hämtar data för ett sökt ord från "https://dictionaryapi.dev/"
 * @param {string} searchWord - Ordet att söka efter.
 * @returns - En array med data eller null om ordet är för kort.
 */
export async function fetchSearchedWord(searchWord: string) {
  // Ordet är för kort eller hittas inte...
  if (!searchWord || searchWord.length < 3) {
    return null;
  }

  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;

  try {
    const response = await fetch(API_URL);
    const wordData: IDictionaryApiResponse[] = await response.json();

    // Returnerar första ordet för att inte få upp för mycket olika data...
    if (wordData.length > 0) {
      return [wordData[0]];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
