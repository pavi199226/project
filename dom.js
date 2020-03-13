var table=document.getElementById('table');
var tr1=document.createElement('tr');
tr1.className="tr1"
var tr2=document.createElement('tr');
tr2.className="tr2"
var tr3=document.createElement('tr');
tr3.className="tr3"

var th1=document.createElement('th');
var th2=document.createElement('th');
var th3=document.createElement('th');

var td1=document.createElement('td');
var td2=document.createElement('td');
var td3=document.createElement('td');

var td4=document.createElement('td');
var td5=document.createElement('td');
var td6=document.createElement('td');

tr1.appendChild(th1)
tr1.appendChild(th2)
tr1.appendChild(th3)

th1.appendChild(document.createTextNode('First name'))
th2.appendChild(document.createTextNode('Last name'))
th3.appendChild(document.createTextNode('Age'))



tr2.appendChild(td1)
tr2.appendChild(td2)
tr2.appendChild(td3)

td1.appendChild(document.createTextNode('Mitu'))
td2.appendChild(document.createTextNode('Venkat'))
td3.appendChild(document.createTextNode('1'))

tr3.appendChild(td4)
tr3.appendChild(td5)
tr3.appendChild(td6)

td4.appendChild(document.createTextNode('Venkat'))
td5.appendChild(document.createTextNode('CK'))
td6.appendChild(document.createTextNode('32'))

table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)
document.body.appendChild(table)
table.style.borderStyle='solid';
table.style.justifyContent;
table.style.marginBottom='solid';
console.log(table);
console.log(tr1)
console.log(tr2)
console.log(tr3)