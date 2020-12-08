
//Create a function that returns the factorial of any given input number


const memo={};

const factorial = (num) => {

    if (num===0) return 1 
    else if (num === 1) return 1 

    if (memo[num]) return memo[num] 
    else {
        let fact=factorial(num-1) * num
        memo[num]=fact ;
        return fact
    }

}
console.log(factorial(3))
console.log(factorial(5))
console.log(factorial(6))
console.log(factorial(7))