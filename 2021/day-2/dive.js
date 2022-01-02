fs = require('fs');

// For the local input
const file = fs.readFileSync('./input.txt').toString('utf-8').split('\r\n');

// Part 1
function dive(file) {
  let depth = 0;
  let horizontal = 0;

  for (let i = 0; i < file.length; i++) {
    let line = file[i].split(' ');
    if (line[0] == 'forward') {
      horizontal = horizontal + parseInt(line[1]);
    } else if (line[0] == 'down') {
      depth = depth + parseInt(line[1]);
    } else if (line[0] == 'up') {
      depth = depth - parseInt(line[1]);
    }
  }
  console.log(depth * horizontal);
}

// Part 2
function dive2(file) {
  let depth = 0;
  let horizontal = 0;
  let aim = 0;

  for (let i = 0; i < file.length; i++) {
    let line = file[i].split(' ');
    if (line[0] == 'forward') {
      horizontal = horizontal + parseInt(line[1]);
      depth = depth + aim * parseInt(line[1]);
    } else if (line[0] == 'down') {
      aim = aim + parseInt(line[1]);
    } else if (line[0] == 'up') {
      aim = aim - parseInt(line[1]);
    }
  }
  console.log(depth * horizontal);
}

dive2(file);
