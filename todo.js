var myul=document.getElementById('mylist');
var mybutton=document.getElementById('add');
var tasks=document.getElementById('tasks')
var form=document.getElementById('form').style.display="block";
//buttonx.querySelector('li').appendChild(buttonx);
//mylistener();
//function mylistener(){
    mybutton.addEventListener('click',todoFunction);
//}
function todoFunction(event){
event.preventDefault();//prevent refresh
var input=document.createElement('input');
var li=document.createElement('li');
var btn=document.createElement("button");
var buttonadd=document.createElement('button');
btn.appendChild(document.createTextNode('X'));
buttonadd.appendChild(document.createTextNode('+'));
input.type='text';
li.append(input);
li.appendChild(btn);
li.appendChild(buttonadd);
myul.appendChild(li);
btn.addEventListener('click',function x(event){
    event.preventDefault();
    myul.removeChild(li);
    tasks.removeChild(li);
});
buttonadd.addEventListener('click',function y(event){
    event.preventDefault();
    console.log(input.value);
    tasks.innerHTML=`
    <li>${input.value}</li>
    `
});
}
