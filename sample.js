var table = document.getElementById('myTable') // will automatically print out in html file





var tr1 = document.createElement('tr');
var tr2 = document.createElement('tr');
var tr3 = document.createElement('tr');

var th1 = document.createElement('th');
var th2 = document.createElement('th');
var th3 = document.createElement('th');

var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');

var myFirstName = document.createElement('td');
var myLastName = document.createElement('td');
var myAge = document.createElement('td');



tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);

tr2.appendChild(td1);
tr2.appendChild(td2);
tr2.appendChild(td3);

tr3.appendChild(myFirstName);
tr3.appendChild(myLastName);
tr3.appendChild(myAge);

table.appendChild(tr1)
table.appendChild(tr2)
table.appendChild(tr3)



var textTh1 = document.createTextNode('Firstname');
th1.appendChild(textTh1);

var textTh2 = document.createTextNode('Lastname');
th2.appendChild(textTh2);

var textTh3 = document.createTextNode('Age');
th3.appendChild(textTh3);


var textTd1 = document.createTextNode('Jill');
td1.appendChild(textTd1);
var textTd2 = document.createTextNode('Smith');
td2.appendChild(textTd2);
var textTd3 = document.createTextNode('50');
td3.appendChild(textTd3);

var textMyFirstName = document.createTextNode('Stien');
myFirstName.appendChild(textMyFirstName);
var textMyLastName = document.createTextNode('Franssens');
myLastName.appendChild(textMyLastName);
var textMyAge = document.createTextNode('24');
myAge.appendChild(textMyAge);



console.log(table)
console.log(tr1)
console.log(tr2)
console.log(tr3)