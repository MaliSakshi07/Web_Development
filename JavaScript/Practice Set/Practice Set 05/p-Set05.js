let companies = ["Amazon","Microsoft","IBM","Uber","Google"];

console.log(companies);

console.log("Delete First Company :",companies.shift());

companies.splice(2,1,"ola");

console.log(companies);

companies.push("TCS");

console.log(companies);