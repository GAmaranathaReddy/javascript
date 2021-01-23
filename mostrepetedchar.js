const obj={};
let str="asjlbadfbaurasdasdhasdsdejfboerubwwwbb";

str.split('').forEach(char => {
	if(obj[char]){
  	obj[char]++;
  }else{
  obj[char] = 1;
  }
});
const largest = Object.keys(obj).reduce((prev,curr) => obj[prev]>obj[curr]? prev : curr);
console.log(obj);
console.log(largest);