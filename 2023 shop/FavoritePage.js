let printSaves = document.querySelector(".print-Saves");
let localSaves = JSON.parse(localStorage.getItem("clothes-Heart"));


localSaves.forEach(function(item){
    printSaves.append(createProductElementFromSaves(item));
})



function createProductElementFromSaves(product) {
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
               buttonRemove.addEventListener("click",  functionRemoveItemfromSaves)

    return DivproductBag;
}

function functionRemoveItemfromSaves(event){
    let element = event.target;
    element.closest(".product").remove();
}

let buttonClearAll = document.querySelector(".Button-Clear button")
buttonClearAll.addEventListener("click",ButtonRemoveAllProducts);

function ButtonRemoveAllProducts(event){
    
    printSaves.remove();
    localStorage.removeItem("clothes-Heart");
    localStorage.removeItem("Nbrs-Product-InSaves");
}