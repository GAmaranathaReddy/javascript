const isAmstrong = (number)=>{
    let num = number+"";
    let sum=0;
    [...num].forEach(digit => sum += Math.pow(digit,3));
    return number == sum;
};

console.log(isAmstrong(153));