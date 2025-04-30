let items = [250,645,300,900,50];

console.log("Actual Price Of the Product :",items);

for(let i=0; i<items.length; i++){
    let offer = items[i]/10;

    items[i] -= offer;
}

console.log("Value After 10 % Discount :",items);