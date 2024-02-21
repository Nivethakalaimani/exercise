let a;
a=45;
console.log(a,typeof a);
a=String(a);
console.log(a,typeof a);
a=Number(a);
console.log(a,typeof a);
a=Object(a);
console.log(a,typeof a);
/* a=String(a);
or
a=a.toString();*/
a="nivi";
a=Number(a);
console.log(a,typeof a);

a="35";
a=parseInt(a);
console.log(a,typeof a);
// parseInt parseFloat
a="35.799999";
console.log(a,typeof a);
a=parseFloat(a);
console.log(a,typeof a);

a=45.6666666;
console.log(a,typeof a);

a=parseFloat(a);
console.log(a,typeof a);
a=parseInt(a);
console.log(a,typeof a);