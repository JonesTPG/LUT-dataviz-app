// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

// Fisher-Yates shuffle used, source: https://bost.ocks.org/mike/shuffle/

export const generateRandomQuestionOrder = () => {
  //TODO: when there are enough questions, make the array bigger

  let array = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8
    // 9,
    // 10,
    // 11,
    // 12,
    // 13,
    // 14,
    // 15,
    // 16,
    // 17,
    // 18,
    // 19
  ];
  let m = array.length;
  let t;
  let i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};

//source: https://dev.to/oyetoket/fastest-way-to-generate-random-strings-in-javascript-2k5a

export const generateRandomString = () => {
  return Math.random().toString(20).substr(2, 8);
};
