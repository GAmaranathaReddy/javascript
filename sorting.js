const sortedArray = (arr) => {
    return arr.sort();
}
console.log(sortedArray([10,20,50,3,5])); // output is [10, 20, 3, 5, 50] sorting will work based on first letter

const sortedNUmber = (arr) => {
    return  arr.sort((next,cur) => next > cur ? 1 :-1 );
 }
console.log(sortedNUmber([10,20,50,3,5])); //[3, 5, 10, 20, 50]
