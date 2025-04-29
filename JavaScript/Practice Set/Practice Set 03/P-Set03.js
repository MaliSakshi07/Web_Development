let studentMarks = [85,97,44,37,76,60];
let sum = 0;

for(let val of studentMarks){

    sum += val;
}

console.log("Total Marks Of Student :",sum);

let avg = sum/studentMarks.length;

console.log(`The Average Percentage Of The Student is ${avg}`);