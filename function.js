// object in function
// const fun=
// {
//      pname:"nivi",
//      greeting:function(){
//     let n=`hello,${this.pname}`;
//     console.log(n);}
// }
// fun.greeting();



function fun(name){
    return{
     pname:name,
     greeting:function(){
    let n=`hello,${this.pname}`;
    console.log(n);}
   };
}
//fun("nivi");
// let person=fun("nivi");
// console.log(person);
//person.greeting();
// let p1=fun("ani");
// p1.greeting();
// console.log(p1);
// console.log(typeof p1);

// CONSTRUCTOR FUNCTION

// function person(){
//     this.pname="nivi";
//     this.greeting = function(){
//         console.log(`hello ${this.pname}`);
//     }
// }
// let per=new person();
// per.greeting();
// console.log(typeof per);

var a=10;
function add()
{
    var b=20;
    var c=a+b;
    console.log(c);
}add();
console.log(a);
console.log(b);