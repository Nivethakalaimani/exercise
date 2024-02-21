//let a=new Array(1,2,3,4,5,6,7,8,9,10);
/*console.log(a);
a.forEach((value,index)=>{
    console.log(index+" "+value);
});

let sr=a.map((value)=>
{
    return Math.sqrt(value).toFixed(2);
})
console.log(sr);

let user=[{
    "name":"nivi","age":20
},{"name":"bivi","age":21}
,{"name":"aivi","age":22}
,{"name":"civi","age":23}
,{"name":"divi","age":24}];
let a22=user.map((value)=>(
{
   //name:value.name,age:value.age,
   
  ...value,
   above23:value.age>22?"yes":"no"
}));
console.log(user);

console.log(a);
//let ra=a.splice(2);
let ra=a.splice(2,0,40,50,60,1000,3847,4883727);
console.log(ra);
console.log(a);
console.log(a.sort());
console.log(a.sort((b,c)=>
{
    return b-c;
}));

let x={1:10,2:20,3:30,4:50,length:5};
console.log(x);
Array.prototype.reverse.call(x);
console.log(x);
 let b=[{age:10},{
    age:3
 },{age:78}];
 let a=[3,4,5,6,7];
 let cage=a.every((value)=>{
    return value>5;
 })
 console.log(cage);

 let b=[{age:10},{
    age:3
 },{age:78}];
 function ca(b){
    return b.age>10;
 }
 let ans=b.every(ca);
 console.log(ans);
 let r=b.some(ca);
 console.log(r);

 let a={1:'a',2:'g'};
 let b={3:'k'};
 console.log(b);
 let c=Object.assign({},a,b);
 console.log(c);
let d={...a};
console.log(d);*/
let a=[1,2,3,4,5,6,7];
//let b=[...a];
//let b=[].concat(a);
//let b=a.slice();
//let b=Array.from(a);
let b=JSON.parse(JSON.stringify(a));
console.log(b);


