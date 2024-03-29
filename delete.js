// var arr = [ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]
// var x = arr.toString()
// console.log(x);

	// Javascript program to convert prefix to Infix
	
	// Function to check if character
	// is operator or not
	function isOperator(x)
	{
		switch(x)
		{
			case 'AND':
			case 'OR':
			case 'NOT':
			return true;
		}
		return false;
	}

	// Convert prefix to Infix expression
	function convert(str)
	{
		let stack = [];

		// Length of expression
		let l = str.length;

		// Reading from right to left
		for(let i = l - 1; i >= 0; i--)
		{
			let c = str[i];

			if (isOperator(c))
			{
				let op1 = stack[stack.length - 1];
				stack.pop()
				let op2 = stack[stack.length - 1];
				stack.pop()

				// Concat the operands and operator
				let temp = "(" + op1 + c + op2 + ")";
				stack.push(temp);
			}
			else
			{

				// To make character to string
				stack.push(c + "");
			}
		}
		return stack[stack.length - 1];
	}
	
	let exp = "*-A/BC-/AKL";
	
	console.log("Infix : " + convert(exp));
	
	// This code is contributed by suresh07.

