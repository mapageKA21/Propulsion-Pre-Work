// opt 1: while loop array
function fibonnacci1(num) {
  let fibonn =[0, 1];

  while (num > fibonn.length - 1) {
    fibonn.push(fibonn[fibonn.length-2]+fibonn[fibonn.length-1]);
  }

  return fibonn[num];
}

// opt 2: recursive
function fibonnacci2(num) {
  if (num <= 1) return num;
  return fibonnacci2(num-2) + fibonnacci2(num-1);
}
