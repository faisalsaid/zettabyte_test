// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {

  //convert int to binary string
  convert = () => {
    const binary = num.toString(2);
    return [arr] = [...binary]
  }

  // return array
  const array = convert()

  const newArray =  array.map(e => parseInt(e))
  return newArray.reduce((acc, cur) => acc + cur)

}

console.log(result(number));