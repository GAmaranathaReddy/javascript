let str = "Dormitory";
let str1 = "Dirtyroom";

if( str.length != str1.length ){
console.log("false");
}else{
let sort1 = str.split('').sort();
let sort2 = str1.split('').sort();
console.log(sort1.join('') == sort2.join(''));
}