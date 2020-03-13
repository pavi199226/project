/*const a = "firstname" + "lastname";
console.log(a);
console.log(typeof(a));

let s1="1+1";
let s2=new String("1+1")
console.log(eval(s2));
console.log(typeof(s1)==typeof(s2));//string!=object
s1 = +s1;
console.log(typeof(s1));
function myfunction(a,b){
return a+b;
}
console.log(myfunction(5,10));

var x="global variable";
function myfunction1(){
    var x="local variable";
    console.log(x);
}
function myfunction2(){
    var x="global variable updated";
    console.log(x);
}
myfunction1();
myfunction2();
age=17;
function greeting(y,z){
    age=z;

    return y;
}

console.log("Hello"+" "+ greeting('Atilla',29)+" "+"Welcome to my page "+ "my age is "+age);
var message="lorem ipsum"
console.log(message.length,message.indexOf('m'),message.concat("pavi"),message.localeCompare(" ",0),message.search("ipsum"),message.lastIndexOf('m'),message.replace('o','p'),message.slice(0,4),message.substring(0,5),message.substr(-1,7),message.toUpperCase())
*/
var flag=0;
var text="hey how are you doing?"
var output
var finalstring=""
for(var i=0;i<text.length;i++)
{

    if(text[i] ==' ')
    {

        flag++
     }
finalstring[i] = text[i]


}
console.log(flag)
console.log(text.replace(/\s+/g, ''))






















































































