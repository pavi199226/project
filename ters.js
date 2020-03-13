productlist=document.getElementById('productlist');
var items = [ {image:"1.jpg",name:"Drone",price:"$189"},
{image:"2.jpg",name:"Rose",price:"$19"}];
var btn=document.getElementById('btn')
btn.addEventListener('click',display);
function display(){
    items.forEach(function display(item){
        productlist.innerHTML +=`
        <div class="row">
        <div class="col-md-2 bg-secondary p-2 text-center">
        <img src ="${item.image}" width="50"></img>
                          </div>
                          <div class="col-md-6 bg-light p-2 text-center">

                            <span id="text-center">${item.name}
                            </span>
                        </div>

                        <div class="col-md-4 bg-secondary p-2 price text-center">

                            <span id="text-center align-middle">${item.price}</span>
                            <i class="fa fa-cart-plus" aria-hidden="true"></i>

                        </div>
                        </div>



        </div>
        `});

    //<h1>"${item.producttitle}"</h1>
    //<h1>"${item.price}"</h1>
}
function createelement(tagname){
    return document.createElement(tagname);
}
var div=createelement('div');
var p=createelement('p');
var tr=createelement('tr');
var td=createelement('td');
console.log(div,p,tr,td);
const secondBody = document.querySelectorAll('#productlist')[0];
console.log(secondBody)
secondBody.addEventListener('click',testfunction);
function testfunction(event){
    if(event.target.id=='delete'){
        console.log("delete");
        console.log(event.target.parentElement.parentElement.childNodes[2].nextElementSibling.outerText)
    }
    console.log(event.target.parentElement.parentElement.childNodes[2].nextElementSibling.outerText)
}