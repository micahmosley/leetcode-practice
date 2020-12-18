class Hash {

    constructor(){
        this.table=[];
    }
    

    add=(num)=>{
        this.table.push(num)
    }

    show=()=>{
        console.log(this.table)
    }
}

let example=new Hash

example.add(5)
example.show()