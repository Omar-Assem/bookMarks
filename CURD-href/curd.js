let tbody = document.getElementById('tbody');
let add = document.getElementById('add');
let link = document.getElementById('link')
let name = document.getElementById('name')
let product = [];
// localstorage
if (JSON.parse(localStorage.getItem("STORE"))) {
    product = JSON.parse(localStorage.getItem("STORE"));
  } else {
    product = [];
  }
  if(name!= '' && link != ''){
    add.addEventListener('click',addLink)
    name,link.addEventListener('keydown',function(event){
      if(event.key === 'Enter'){
          addLink()
      }
    })

  }


function addLink(){
    
    
    let productOBJ = {
        name : name.value,
        link : link.value
    }
    
    localStorage.setItem("STORE",JSON.stringify(product))
    if(productOBJ.name == `` && productOBJ.link == ``){
        alert("Please fill in the form")
        } else {
            product.push(productOBJ)
    }
    display()
    ClearInputs()
    
}
function display(){
    let data = ``
   for(let i = 1 ; i<product.length; i++){
     data += `
        <tbody >
        <td>${i}</td>
        <td>${product[i].name}</td>
        <td>
            <button class="btn btn-info" onclick='vist(${i})'> Vist</button>
        </td>
        <td>
            <button class="btn btn-danger" onclick='deleteAll(${i})'>Delete</button>
        </td>
    </tbody>`
   }
   tbody.innerHTML=data

   
}
// Delete.addEventListener('click',deleteAll)
function deleteAll(i){
    product.splice(i,1)
    localStorage.getItem('STORE',JSON.stringify(product))
    display()
}
function ClearInputs(){
    name.value = "";
    link.value = "";
}

function vist(i){
    window.location.assign(`https://www.${product[i].link}.com`);
}

display();