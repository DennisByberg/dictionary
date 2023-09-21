/**
 * Hämtar data för ett sökt ord från "https://dictionaryapi.dev/"
 * @param {string} searchWord - Ordet att söka efter.
 * @returns - En array med data eller null om ordet är för kort.
 */
export async function fetchSearchedWord(searchWord: string) {
  if (!searchWord || searchWord.length < 3) return null;

  const API_URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;

  try {
    const response = await fetch(API_URL);
    const data: IDictionaryApiResponse[] = await response.json();
    // console.log(data);

    return data.length && [data[0]];
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
