const isBalancedBrackets= (stringValue) =>{ 
const stack=[];
let openers = ["{","[","("];
let closers = ["}","]",")"];

const dict = {
    "{" : "}",
    "[" : "]",
    "(" : ")"
  }

if(stringValue.length<=0){
    return false;
}
// [...stringValue].forEach(ch =>{
//     if(openers.includes(ch)){
//         stack.push(ch);
//     }
//     else if(closers.includes(ch)){
//         if(stack.length==0){
//             console.log('false');
//             return false;
//         }
//         if(dict[stack.pop()] != ch){
//             return false;
//         }
//     }
// });

for(let i=0;i<stringValue.length;i++){
    let ch=stringValue[i];
    if(openers.includes(ch)){
        stack.push(ch);
    }
    else if(closers.includes(ch)){
        if(stack.length==0){
            console.log('false');
            return false;
        }
        if(dict[stack.pop()] != ch){
            return false;
        }
    }  
}
return stack.length === 0;
};

    console.log(isBalancedBrackets("(){}{}()()[][]"));