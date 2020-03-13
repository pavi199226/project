var Name=prompt("enter name")
var Age=prompt("enter age")
var Weblanguage=prompt("enter language")
var Country=prompt("enter your nationality")
var webdevelopers ={
    name:"",
    age:"",
    weblanguage:"",
    country:"",
    showdetails:function()
    {
        console.log("Name:"+" "+this.name+" "+"age:"+" "+this.age+" "+"language:"+" "+this.weblanguage+" "+"country:"+" "+this.country)
        print()
    }

}

var output=webdevelopers.showdetails();
webdevelopers.name=Name;
webdevelopers.age=Age;
webdevelopers.weblanguage=Weblanguage;
webdevelopers.country=Country;
console.log(webdevelopers.showdetails())
document.writeln(output)
function print(){

    document.getElementById('test').value= webdevelopers.name;
     document.getElementById('test1').value = webdevelopers.age ;
     document.getElementById('test2').value = webdevelopers.weblanguage;
     document.getElementById('test3').value = webdevelopers.country ;
 }
function submitted(){
    document.getElementById('test4').innerHTML =alert('Form submitted successfully')
}
