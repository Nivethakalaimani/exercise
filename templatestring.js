
let res="<h1>jkdhiaj</h1>";

let fname='nivi';
let age='20';
res+="<table border='1'><tr><th>name</th><td>"+fname+"</td></tr><tr><th>age</th><td>"+age+"</td></tr></table>";


res+=`<table><tr><th>fname</th><td>${fname}</td></tr></table>`;
document.body.innerHTML=res;