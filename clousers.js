// we start with clousers, 
// clousers is the javascipt fetaures in which inner function remember the varaible froms its outer lexical scope even after the outer function execution is completed .

const outer=()=>{
    let a=1;
    const inner=()=>{
        console.log(a++)
    }
    return inner
}

let fn= outer() // at that time outer function execute and ended and it return the inner function.
fn() // then when call inner function it still hold the value of outer varaible , this process is know as clousers

// mainly its used for Data hiding , just the encapsulation work in oop.
