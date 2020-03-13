var body=document.getElementsByTagName('body')[0];
var tbl=document.createElement('table');
var tblBody=document.createElement('tbody');
for (var j = 0; j <= 3; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i < 3; i++) {
      // create element <td> and text node
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("td");
        if(i==0 && j==0)
        var cellText = document.createTextNode("First name");
        ifelse (i==1 && j==0)
        {cellText = document.createTextNode("Last name");}
        ifelse (i==2 && j==0)
        {cellText = document.createTextNode("Age");}
        else{ cellText = document.createTextNode("");}


      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to
  tbl.setAttribute("border", "2");

