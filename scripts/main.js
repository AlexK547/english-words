const words = [
  { en: "apartment", rus: "квартира"},
  { en: "balcony", rus: "балкон"},
  { en: "bathroom", rus: "ванная комната"},
  { en: "bed", rus: "кровать"},
  { en: "blanket", rus: "одеяло"},
  { en: "cabinet", rus: "шкаф"},
  { en: "ceiling", rus: "потолок"},
  { en: "chair", rus: "стул"},
  { en: "closet", rus: "шкаф"},
  { en: "comb", rus: "гребень"}
];

let arrayWords = [];

const questionWord = document.querySelector('.word-question');
const arrayOptions = document.querySelectorAll('.list__item');

createArrayWords();
console.log(arrayWords);

showAnswer(arrayWords[0]);



function createArrayWords() {
  for (let i = 0; i < words.length; i++) {
    let elem = [words[i].en, words[i].rus];

    arrayWords.push(elem);
  }

  arrayWords.sort(() => Math.random() - 0.5);
}

function showAnswer(item) {
  questionWord.innerHTML = item[0];
  let randomAnswers = createRandomAnswers(item[1]);
  console.log(randomAnswers);
  for ([index, item] of arrayOptions.entries()) {
    item.innerHTML = randomAnswers[index];
  }
}

function createRandomAnswers(rightAnswer) {
  let randomList = [];
  randomList.push(rightAnswer);
  for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * arrayWords.length);
    while (randomList.includes(arrayWords[number][1])) {
      number = Math.floor(Math.random() * arrayWords.length);
      console.log("yes");
    }
    randomList.push(arrayWords[number][1]);
  }
  randomList.sort(() => Math.random() - 0.5);
  return randomList;
}
