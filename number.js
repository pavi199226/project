/*var myNumber ="10"
var myFloatNumber =10.5
var money=10.12
var showInConsole =Number(myNumber)
//showInConsole = +myNumber
//console.log(typeof(myNumber),typeof(showInConsole))
showInConsole=parseInt(myNumber)
var result,user=1
var output = Number.isInteger(user)
result = output == true ? "Integer":"NaN"
//console.log(showInConsole,typeof(myFloatNumber),Number.isFinite('123'),money.toFixed(1),typeof(myFloatNumber.toString(2)) ,result)
var books=['book1','book2','book3','book4']
var show =books.pop()
show=books.push('book4')
show=books.push('book5')
books.push('book6')
console.log(books)
books.shift();
console.log(books)
books.shift();
console.log(books)
books.shift();
console.log(books)
books.push('book7','book8')
console.log(books)
books.unshift('book1','book2','book3')
console.log(books)
books.splice(2,5)
console.log(books)
books.splice(2,0,'book3','book4','book5','book6','book7')
console.log(books)
//console.log(books.shift())

function myfunction(){

    //document.getElementById('result').innerHTML=books.splice(0,3);
    if(document.getElementById('age').value<5)
    alert('Age is valid')
    else
    alert('Age is not valid')

}
var data="   abc"
var data1="def"
var result=data.concat(data1).trim()
console.log(result)
var y=[1,3,5,0];
y.forEach(myFunc);
function myFunc(value,index,array){
    console.log("Index",index)
    console.log("value",value)
}
console.log(y.sort(function(a,b){return b-a;}))*/

var scores=[{
    name:"student1",
    score:22,
},
{
    name:"student2",
    score:65
},

{
    name:"student3",
    score:88
},
{
    name:"student4",
    score:37
},
]
console.log(scores["names"])
/*for(var i=0;i<scores.length;i++)
    {out[i]=value.score
    console.log(out.sort())}*/
var out=[]
scores.forEach(compFunc);
function compFunc(value,index,array){

if(value.score>70)
{
    //console.log("Index",index,'you have passed')
    console.log("value",value,'you have passed')
    //console.log("Name",name)


}

}console.log(scores.sort(function(a,b){
return a.score-b.score;}))

  /*var myRecords = [

    {
        name:"Narine",
        score:90
    },
    {
        name:"Merlin",
        score:80
    },
    {
        name:"Anna",
       score:100
    }
    ]
    //console.log(myRecords.sort())
    // console.log(student.name, student.familyname, student.job)
    /*
    var myarr=['a','b','c']
    const check = myarr.reduce((accumulator, item)=>{
        accumulator += item,0;
    })
    console.log(check)

    myRecords.forEach(myRecords=>{
        if(myRecords.score>80){
            console.log(myRecords.name,"You have passed")
        }

    })
  console.log(myRecords.sort((a,b)=>{return a.score - b.score}))



  myRecords.forEach()*/