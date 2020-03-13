function firstfunction(){
    var counter=0;
    function secondfunction(){
        counter+=1;
    }
    secondfunction();
    return counter;
}

console.log(firstfunction());