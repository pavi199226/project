var dataflow=5;
function keeper1(a){
    return a;
}
function keeper2(a){
    return a;
}
function keeper3(a){
    return a;
}
var result = keeper3(keeper2(keeper1(dataflow)))
//console.log(result)

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
scores.map(function(value,index,array){
   // console.log(value,index,array)
})
scores.forEach(function(value){
  //  console.log(value)
})
console.log(scores.filter(function(a){
    //return a.name >= 50;
}))
function showeverything(mylist){
  return mylist.sort(function(a,b){
    return b.score-a.score;
}).filter(function(student){ return student.score>=50;}).map(function(value){
    return value.name;})}
showeverything(scores)