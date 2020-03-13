var student=[
    {
        name:"student1",
        score:"10"
    },
    {
        name:"student2",
        score:"20"
    }
    ,
    {
        name:"student3",
        score:"30"
    }
    ,
    {
        name:"student4",
        score:"40"
    },
    {
        name:"student5",
        score:"50"
    }

]
function pass(student){
    return student.score>10;
}
function getstudentname(student){
    return student.name;
}
function whopassed(mylist){
    return mylist.filter(pass).map(getstudentname);
    }

console.log(whopassed(student));
for(i=0;i<student.length;i++){
    if(student[i].score>5)
    console.log(student[i].name);
}