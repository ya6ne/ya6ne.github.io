let params = new URLSearchParams(document.location.search.substring(1));
let id = params.get("id");
console.log(id);


'http://localhost:3000/api/teddies/'

fetch(`${apiUrl}/api/teddies/`+ id)
.then(response => {
    /* console.log(response); */
    if (response.ok){
        return response.json();
        
    }else {
        throw 'ERREUR API';
    }
})
.then(data => {
     console.log(data);

     const couleurs = data.colors.map(couls => {
         return `<option value="${couls}">${couls}</option>`
     })
     console.log(couleurs)
     

     const html2 = `<div class="col-lg-8 ml-auto mr-auto mt-4">
     <div class="card">
     <img class="card-img-top" src="${data.imageUrl}" alt="photo">
     <div class="card-body">
     <h5 class="card-title">${data.name}</h5>
     <p class="card-text">
     Description : ${data.description} <br/>
     couleurs : ${data.colors.join(" ou ")}<br>
     Prix : <span id="couleur" style="color:red; font-size: 22px;">${data.price/100} €</span><br>
     </p>
     <label for="c-select">Couleur:</label>
     <select name="pcolor" id="c-select">
     ${couleurs}
     </select> <br/>
     <a href="panier.html" id="btn" class="btn btn-dark mt-4" >Ajouter au panier</a>

     </div>
     </div>
     </div>`
     
     document.getElementById("myproduct").innerHTML = html2
     /* var panier = {} */
     

     /* var oo = data._id.substring(1, 3) + document.getElementById("c-select").value.substring(0 , 3) */
     
     

    document.getElementById("btn").addEventListener("click", function(e){
        /* e.preventDefault() ; */
        var data2 = [data.name, document.getElementById("c-select").value,data.price, data._id]
        let myStorage = JSON.parse(localStorage.getItem("product"));
        
        if(!myStorage){
            myStorage = []
        }
        myStorage.push(data2);
    
        localStorage.setItem("product", JSON.stringify(myStorage));
         
     


   
        

        

    })
    
    
    
 

    


})
.catch(err =>{
    console.log(err);
})







