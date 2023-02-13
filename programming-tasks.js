// Задача 1 (2 минуты)
const func1 = (arr) => {
  if (!arr || arr.length === 0) return;

  return arr.join(', ') + '.';
};

console.log(func1(['Москва', 'Санкт-Петербург', 'Воронеж'])); // Москва, Санкт-Петербург, Воронеж.

// Задача 2 (15 минут)
const func2 = (num) => {
  const newNum = Math.round(num / 5) * 5;

  if (newNum === -0) return 0;

  return newNum;
};

console.log(func2(27), func2(27.8), func2(41.7), func2(-2)); // 25 30 40 0

// Задача 3 (30 минут)
const func3 = (num) => {
  if (num % 1 !== 0) return;

  if (num >= 11 && num <= 14) {
    return num + ' компьютеров';
  }
  if (`${num}`.endsWith('1')) {
    return num + ' компьютер';
  }
  if (`${num}`.match(/[234]$/)) {
    return num + ' компьютера';
  }

  return num + ' компьютеров';
};

console.log(func3(25)); // 25 компьютеров
console.log(func3(41)); // 41 компьютер
console.log(func3(1048)); // 1048 компьютеров
console.log(func3(4)); // 4 компьютера

// Задача 4 (20 минут)
const func4 = (num) => {
  if (num <= 1) return;
  if (num % 1 !== 0) return;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return num + ' — составное';
    }
  }

  return num + ' — простое';
};

console.log(func4(2)); // 2 — простое
console.log(func4(12)); // 12 — составное
console.log(func4(41)); // 41 — простое
console.log(func4(199)); // 199 — простое

// Задача 5 (30 минут)
const getFilteredArray = (arr) => {
  const newArr = [];

  arr.forEach((el1) => {
    if (arr.filter((el2) => el1 === el2).length > 1) {
      if (!newArr.includes(el1)) {
        newArr.push(el1);
      }
    }
  });

  return newArr;
};

const func5 = (arr1, arr2) => {
  const newArr1 = getFilteredArray(arr1);
  const newArr2 = getFilteredArray(arr2);
  const result = [];

  newArr1.forEach((el) => {
    if (newArr2.includes(el)) {
      result.push(el);
    }
  });

  return result.sort((a, b) => a - b);
};

console.log(
  func5([7, 17, 1, 9, 1, 17, 56, 56, 23], [56, 17, 17, 1, 23, 34, 23, 1, 8, 1])
); // [ 1, 17 ]

// Задача 6 (1 час)
const func6 = (num) => {
  const arr = [['']];
  let result = '';

  for (let i = 1; i <= num; i++) {
    arr[0].push(i);
    arr.push([i]);
    for (let n = 1; n <= num; n++) {
      arr[i].push(n * i);
    }
  }

  for (let i = 0; i <= num; i++) {
    for (let n = 0; n <= num; n++) {
      arr[n][i] =
        ' '.repeat(`${arr[i].slice(-1)}`.length - `${arr[n][i]}`.length) +
        arr[n][i];
    }
  }

  arr.forEach((el) => (result += el.join(' ') + '\n'));

  return result;
};

console.log(func6(5));

//  1  2  3  4  5
//1 1  2  3  4  5
//2 2  4  6  8 10
//3 3  6  9 12 15
//4 4  8 12 16 20
//5 5 10 15 20 25

console.log(func6(10));

//    1  2  3  4  5  6  7  8  9  10
// 1  1  2  3  4  5  6  7  8  9  10
// 2  2  4  6  8 10 12 14 16 18  20
// 3  3  6  9 12 15 18 21 24 27  30
// 4  4  8 12 16 20 24 28 32 36  40
// 5  5 10 15 20 25 30 35 40 45  50
// 6  6 12 18 24 30 36 42 48 54  60
// 7  7 14 21 28 35 42 49 56 63  70
// 8  8 16 24 32 40 48 56 64 72  80
// 9  9 18 27 36 45 54 63 72 81  90
//10 10 20 30 40 50 60 70 80 90 100
