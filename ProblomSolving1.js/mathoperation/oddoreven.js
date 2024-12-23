const array = [10, 3, 13, 5, 1, 20, 6];

const even = array.filter((item) => item % 2 === 0);
// console.log('even number',even)

const odd = array.filter((item) => item % 2 !== 0);
// console.log('even number',odd)

const arrayofstring = ["apple", "banana", "avocado", "orange", "strawberry"];

function foundFilter(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(foundFilter(arrayofstring, "A"));
