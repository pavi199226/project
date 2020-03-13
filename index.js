/*var element=document.createElement('div');
element.className="container";
var rowelement =document.createElement('div');
rowelement.className="row";
var columnelement =document.createElement('div');
columnelement.className="col-sm-12";
rowelement.appendChild(columnelement)
element.appendChild(rowelement)

var button =document.createElement('button')
button.innerHTML='OK'
columnelement=document.getElementsByTagName("body")[0];
columnelement.appendChild(button);
button.addEventListener('click',function(){alert('ok')});
var rowtext=document.createTextNode("this is row");
var columntext=document.createTextNode("this is column")
rowelement.appendChild(columntext);
element.appendChild(rowtext);
console.log(element)*/
var head=document.createElement('head');
var title=document.createElement('title');

title.title="Welcome";
head.appendChild(title);
var body=document.createElement('body');
body.className="body";

var h1 =document.createElement('h1');
h1.className="col-sm-12";
var columntext=document.createTextNode('Know about google');
h1.appendChild(columntext);
body.appendChild(h1);
var img=document.createElement('img');
img.src= 'download.png';
img.alt="google";
img.width="500";
body.appendChild(img);
var p=document.createElement('p');
p.className="paragraph";
var partext=document.createTextNode('google is great');
p.appendChild(partext);
body.appendChild(p);
document.head.appendChild(head);
document.body.appendChild(body);
var animation = ([
    { // from
      opacity: 0,
      color: "#fff"
    },
    { // to
      opacity: 1,
   ​   color: "#000"
    }
  ], 2000);
//var myimg=document.getElementById('image').
//img.appendChild(myimg);
console.log(body);