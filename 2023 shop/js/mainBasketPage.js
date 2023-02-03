let printPanier = document.querySelector(".printPanier");
let localClothes = JSON.parse(localStorage.getItem("clothes"));

localClothes.forEach(function(item){
    printPanier.append(createProductElementFromPanierBags(item));
})

// ---- Print ------//
function createProductElementFromPanierBags(product) {
    let {
        sku,
        image,
        name,
        price,
        dimensions,
    } = product;

    let DivproductBag = document.createElement("div");
    DivproductBag.classList.add("product");

    DivproductBag.innerHTML = `  
                    <img src="${image}" width="330">
                    <div class="photo-description">
                    <p class="name">${name}</p>
                    <span class="product-price">
                    <button id="save"  data-sku="${sku}" class="save"><i class="fa fa-heart-o" data-sku="${sku}"  aria-hidden="true"></i></button>
                    <a class="price">Price :${price}</a>
                    <span class="currency">$</span>
                    </span>
                    <p class="content dimensions">${dimensions}</p>
                   Remove <button id="RemoveLocalStorage"  data-sku="${sku}" class="Remove"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div> `;

               let buttonRemove = DivproductBag.querySelector("#RemoveLocalStorage");    
               buttonRemove.addEventListener("click",  functionRemoveItemfromPanier)
    return DivproductBag;
}

// ---- button remove On Each Product ---//
function functionRemoveItemfromPanier(event){
    let element = event.target;
    element.closest(".product").remove();
}

//----- Button Clear All ------//
let buttonClearAll = document.querySelector(".Button-Clear")
buttonClearAll.addEventListener("click",ButtonRemoveAllProducts);

function ButtonRemoveAllProducts(event){
    let element = event.target;
    printPanier.remove();
    localStorage.removeItem("total-price");
    localStorage.removeItem("NbrsProduct");
    localStorage.removeItem("clothes")
}
    
