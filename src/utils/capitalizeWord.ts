function capitalizeWord(str: string) {
  const words = str.split(" ");
  const capitalizedWords = words.map((word) => {
    const formattedWord = word.replace(/-/g, " ");
    return formattedWord.charAt(0).toUpperCase() + formattedWord.slice(1);
  });
  return capitalizedWords.join(" ");
}

export default capitalizeWord;
