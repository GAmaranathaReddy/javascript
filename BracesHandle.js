let isBalanced= (input) =>{
	let stack =[];
	for(char of input){
		if(char =='{' || char == '[' || char == '('){
			stack.push(char);
		}
		else{
			if(char =='}' && stack.pop() !='{' ){
				return false;
			}
			if(char == ']' && stack.pop() !='['){
				return false;
			}
			if(char == ')' && stack.pop() != '('){
				return false;
			}
		}		
	}
	return true;
}
console.log(isBalanced("{[([({})])]}"));