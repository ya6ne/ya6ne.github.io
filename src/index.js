/* 'http://localhost:3000/api/teddies' */
fetch(`${apiUrl}/api/teddies`)
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
    /* insertion HTML ici */
    const html = data.map(info => {
        return `<div class="col-12 col-lg-4">
        <div class="card">

            <img class="card-img-top" src="${info.imageUrl}" alt="photo">

            <div class="card-body">
                <h5 class="card-title">${info.name}</h5>

                
                <p class="card-text">
                Description : ${info.description} <br/>
                couleurs disponibles : ${info.colors.join(" / ")}<br>
                Prix : <span id="couleur" style="color:red; font-size: 22px;">${info.price/100} €</span><br>
                </p>

                <a href="product.html?id=${info._id}" class="btn btn-dark">Personnaliser</a>
            </div>
        </div>
    </div>`
    }).join("");
    
   
    
    /* console.log(html); */
    document.querySelector("#element").insertAdjacentHTML("afterbegin", html);
    /* insertion ci-dessus */
})
.catch(e =>{
    console.log(e);
})
