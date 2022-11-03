const calPoints = (operations) => {
  let sum = [];

  for (let i = 0; i < operations.length; i++) {
    if (!isNaN(Number(operations[i]))) sum.push(Number(operations[i]));

    if (operations[i] === "C") sum.pop();

    if (operations[i] === "D") sum.push(sum[sum.length - 1] * 2);

    if (operations[i] === "+")
      sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
  }

  return sum.length > 0 ? sum.reduce((a, b) => a + b) : 0;
};

// console.log(calPoints(["5", "2", "C", "D", "+"]));
console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]));
