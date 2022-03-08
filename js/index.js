
//Global Scope
//variable or function define outside the function or in global Context

var x; //global variables
let y;
const z;
function demo()//global function
{
    console.log(x);
    console.log(y);
    console.log(z);
}


//local scope
//variable or function define inside any global function or in function Context
function dummy()//global function
{
    var x;//local varaible
    let y;
    const z;
    console.log(x);
    console.log(y);
    console.log(z);
    function localScope() //local function
    {
        console.log("Local Function");
    }

}


//Block Scope
//Variable declare inside any block (if,while,for){} using let and const keyword

if(true)
{
    var x="X";//global varaible
    let y="Y"; //block scope
    const z="Z"; //block scope
    console.log(x);
    console.log(y);
    console.log(z);
}
//outside the if only x is accessible
console.log(x);
console.log(y);
console.log(z);
