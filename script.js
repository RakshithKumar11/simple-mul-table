

function myFun(){
const input = document.getElementById('input').value;
var para = document.getElementById('mul');
for(var i=1;i<=10;i++){
    let pa = document.createElement('p');
    pa.innerHTML = `${input} X ${i} = ${input*i}`;
    para.appendChild(pa);
}
}