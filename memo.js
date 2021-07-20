// JavaScript 배열 내장 함수 map
// 배열을 특정 함수를 사용하여 전체적으로 변환해주고 싶을 때 사용하는 함수

const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map((n) => n * n);
console.log(squared);
//squared
//▶ (5) [1, 4, 9, 16, 25]

// 배열 데이터 제거
// .slice or .filter

numbers.slice(0, 2);
//▶ (2) [1, 2]
// 원래 배열에 손대지 않고 새 배열을 만든다 (index 0부터 2까지 자른다.(앞~뒤까지))
numbers.slice(0, 2).concat(numbers.slice(3, 5));
//▶ (4) [1, 2, 4, 5]
// concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환
// -> 기존 배열을 변경하지 않는다.
// -> 추가된 새로운 배열을 반환한다.

[...numbers.slice(0, 2), 10, ...numbers.slice(3, 5)];
//▶ (4) [1, 2, 10, 4, 5]
// spread 문법을 사용해서 표현 가능

// filter 함수는 특정 조건을 가지고 값들을 필터링 가능
numbers.filter((n) => n > 3);
//▶ (2) [4, 5]
numbers.filter((n) => n !== 3);
//▶ (4) [1, 2, 4, 5]
// 원래 배열인 numbers의 불변성은 유지된다.

// 배열 데이터 수정
// .slice or .map
const numbers = [1, 2, 3, 4, 5];
[...numbers.slice(0, 2), 9, ...numbers.slice(3, 5)];
//▶ (4) [1, 2, 9, 4, 5]

numbers.map((n) => {
  if (n === 3) {
    return 9;
  }
});
// 특정 조건에만 부합했을 때, map 이 실행
