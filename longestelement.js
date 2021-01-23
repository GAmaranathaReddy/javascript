
let array = ['test','test1','test11','test111'];
const longestelement  = array.reduce((prev,curr) => (prev>curr)?prev:curr);
console.log(longestelement); 
