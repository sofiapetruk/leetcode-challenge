function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u"];
  const stringArray = s.split("");

  const vowelsInString: string[] = [];

  for (const possibleVowel of stringArray) {
    if (vowels.includes(possibleVowel.toLowerCase())) {
      vowelsInString.push(possibleVowel);
    }
  }

  let vowelIndex = vowelsInString.length - 1;

  for (let i = 0; i < stringArray.length; i++) {
    if (vowels.includes(stringArray[i].toLowerCase())) {
      stringArray[i] = vowelsInString[vowelIndex];

      vowelIndex--;
    }
  }

  return stringArray.join("");
}
