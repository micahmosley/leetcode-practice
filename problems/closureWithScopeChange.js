let fns =[]

for(var i = 0; i < 5; i++) {
 var c = i * 2;
 fns.push( _ => console.log(c))
}

fns.forEach( f => f() )

//You would think that this would print out 0, 2, 4, 6, 8 

//However it prints 8, 8, 8, 8, 8

//This is because when the function is called and pushed into the fns array, it brings along with it a REFERENCE to everything in its outer scope
//including the variable c 
//Since it is a reference to c and c is not passed by value by the time the functions inside fns are called c is equal to 8 so 
//it prints out all 8s