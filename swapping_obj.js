
// Write a function that swaps the keys and values for each object in the array.
function swapkeysandvalues(arr) {
  return arr.map(obj => {
    let swappedObj = {};
    for (let key in obj) {
      // Swap keys and values
      swappedObj[obj[key]] = key;
    }
    return swappedObj;
  });
}

let data = [
  {a:1,b:2,c:3},
  {1:'a',2:'b'},
  {name:'nanda',place:'bengalore'}
];

let swappedData = swapkeysandvalues(data);
console.log(swappedData);
