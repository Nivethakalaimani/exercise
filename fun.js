var ob={
    'name':'nivi',
    'age':20,
    'dob':'23/2/2003'
};
console.log(ob);
console.log(ob.age);
function f1(name)
{
    var p=name;
    console.log(name.dob);   //it written function type
}
var o={
    'name':'nivi',
    'age':20,
    'dob':'23/2/2003'
};
f1(o);
//console.log(f1.name);  name property


//anonymous function

var fun=()=>{
    console.log("gm");
}
console.log(fun);
console.log(fun());

var fn=()=>{
    
}