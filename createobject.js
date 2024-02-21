/* using object literals
let detial={name:"nivi",age:20};
using object constructor
let detail=new Object();
using Object.create()
Object.create(prototype,properties value)
creating methods in object is called prototype

const proto={
    sayhello:function(){
        console.log(`hello ${this.name}`);
    }
};
const detail=Object.create(proto);
detail.name="nivi";
console.log(detail);
detail.sayhello();

// using class
class detail{
    constructor(name,age)
    {
       this.name=name;
       this.age=age;
    }
};
let obj=new detail("nivi",12);
console.log(obj);

let detail={name:"nivi",age:20};
//let pro="name";
//console.log(detail[pro]);

for(let k in detail)
{
    console.log(k , detail[k]);
}
let ke=Object.keys(detail);
console.log(ke);
let v=Object.values(detail);
console.log(v);
let e=Object.entries(detail);
console.log(e);*/

function add()
{
    let total=0;
    for(let i=0;i<arguments.length;i++)
    {
        total+=arguments[i];
    }
    return total;
}
console.log(add(1,2,3,4,5));
