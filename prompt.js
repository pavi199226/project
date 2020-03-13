/*var userinput=prompt("say hello");
//var test=confirm("okay?");
document.writeln(userinput)
console.log(confirm("okay?"))
//alert("this is a message")
var user=confirm("are you sure?")

var result = (user==true)?"ok":"cancel";
console.log(result);
document.writeln(result)*/
var name=prompt("enter firstname");
var familyname=prompt("enter familyname")
var age=prompt("enter age")
var student ={
    firstname: "",
    lastname:"",
    age:"",
    showstudent: function(){
        console.log(this.firstname+" "+this.lastname+" "+this.age)
        print();
    }
}
student.firstname = name;
student.lastname=familyname;
student.age=age;
student.showstudent()
//console.log(student)
//document.writeln(student.showstudent())
function print(){

   document.getElementById('test').value= student.firstname;
    document.getElementById('test1').value = student.lastname ;
    document.getElementById('test2').value = student.age ;
}
