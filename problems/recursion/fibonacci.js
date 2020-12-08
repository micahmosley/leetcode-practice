
//Create a function that returns the fibonacci number of any given input number


const memo={};

const fibonacci = (num) => {

    if (num===0) return 1 
    else if (num === 1) return 1 

    if (memo[num]) return memo[num] 
    else {
        let fib=fibonacci(num-1) + fibonacci(num-2)
        memo[num]=fib ;
        return fib
    }

}

console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))