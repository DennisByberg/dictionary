function addWordToFavorites(wordObject: Object, dispatch: Function) {
  dispatch({ type: "add", payload: wordObject });
}

function deleteWordFromFavorites(id: string, dispatch: Function) {
  dispatch({ type: "delete", payload: id });
}

export { addWordToFavorites, deleteWordFromFavorites };
