// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {

  // mix arr
  const mix = [...arr1, ...arr2];

  // filter not arr1
  const notArr1 = mix.filter(item => !arr1.includes(item) );

  //filter odd and even
  const odds = notArr1.filter(n=>n%2).reverse();
  let even = notArr1.filter(n=>n%2 == 0);

  //concat all array
  return [...odds, ...arr1, ...even]
  
}

console.log(result(arr1, arr2));