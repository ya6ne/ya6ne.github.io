
let paybutton = document.getElementById("paybutton");
let terminal = document.getElementById("terminal")
var insert = document.getElementById("myproduct")
var produit = JSON.parse(localStorage.getItem("product"))
var personalInfo = document.getElementById("personalInfo")
var livraison
var totale = 0

let myForm = document.getElementById('personalInfo')



if(!produit){
  console.log("walou")
}else{
  var nombreDeProduit = produit.length
  for (i =0 ; i < nombreDeProduit; i++){
      console.log(produit[i])
          insert.innerHTML += `
          <tr>
      <th scope="row"><a href="" id="delete${i}">X</a></th>
      <td>${produit[i][0]}</td>
      <td>${produit[i][1]}</td>
      <td>${produit[i][2]/100}€</td>
      </tr>`
    totale += produit[i][2]
  }
  
  
  if (totale/100 >100){
    livraison = 0
  }else{
    livraison = 10
  }
  
   
  insert.innerHTML += `<th scope="row">>></th><td colspan="2">Livraison</td><td class="text-success">${livraison}€</td>`
  insert.innerHTML += `<th scope="row">>></th><td colspan="2">Totale</td><td class="text-success">${totale/100 + livraison}€</td>`
  
  console.log(produit[0])
  
  
  
  
  
  

  
}






myForm.addEventListener('submit', function(e){
  e.preventDefault()
  let products = []
  
for (i=0 ; i<produit.length; i++)
{
  products.push(produit[i][3])
}
console.log(JSON.stringify(products))
  /* const formdata = new FormData(this) */  /* body: formdata */
  var name = document.getElementById("name").value
  var lastName = document.getElementById("lastname").value
  var email = document.getElementById("email").value
  var adress = document.getElementById("adress").value
  var city = document.getElementById("city").value
  var contact = {
    firstName : name,
    lastName : lastName,
    address : adress,
    city : city,
    email : email
  }
  /* 'http://localhost:3000/api/teddies/order' */
  fetch(`${apiUrl}/api/teddies/order`, {
    method: 'POST',
    body: JSON.stringify({contact, products}),
  
    headers:{
      "content-type":"application/json; charset=UTF-8"
    }
  
  }).then(response => {
    console.log(response)
    return response.json()
  }).then(response =>{
    console.log(response)
    console.log(response.contact.lastName)
    localStorage.setItem("numCommande" ,  response.orderId)
    localStorage.setItem("prixTotale", totale/100 + livraison)
    localStorage.setItem("nomClient", response.contact.firstName)
    document.location.href="confirmation.html"
    
  }).catch(err => console.log(err));
})

console.log(JSON.stringify(produit))
/* produit.splice(0,1)
console.log(JSON.stringify(produit))
localStorage.setItem("product", JSON.stringify(produit));

document.location.reload(); */
/* document.getElementById(`delete`).addEventListener("click", function(){
  
  
})
 */




