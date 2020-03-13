var a=document.getElementById('test');
var rose=document.getElementById('rose');
function getmessage()
{
    var showtime=new Date();
    alert('welcome to my site',showtime);
}
//console.log(getmessage());
function mouseover(){
    return a.innerHTML="hey";
}
function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
  function mouseout(){
    setTimeout(()=>{a.innerText="oops"
},1000);

  return a.innerHTML="hello";
  }
function changephoto(){
    return rose.src="2.jpg";
}
