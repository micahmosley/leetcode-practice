//With a closure when the outer function is called, the inner function is returned along with a reference to everything outside of its scope

closure=(num)=>{

    return innerFunction=(num2)=>{
        return num*num2
    }
}

let inner=closure(5)
console.log(inner(10))