fs = require('fs');

// For the local input
const file = fs
  .readFileSync('./input.txt')
  .toString('utf-8')
  .split('\r\n');

// Part 1
function countIncreased(file) {
  let counter = 0;

  for (let i = 0; i < file.length - 1; i++) {
    if (parseInt(file[i]) < parseInt(file[i + 1])) {
      counter++;
    }
  }
  console.log(counter);
}

// Part 2
function countSlidingIncreased(file) {
  let counter = 0;
  for (let i = 0; i < file.length - 2; i++) {
    if (
      parseInt(file[i]) + parseInt(file[i + 1]) + parseInt(file[i + 2]) <
      parseInt(file[i + 1]) + parseInt(file[i + 2]) + parseInt(file[i + 3])
    ) {
      counter++;
    }
  }
  console.log(counter);
}

countIncreased(file);
countSlidingIncreased(file);
