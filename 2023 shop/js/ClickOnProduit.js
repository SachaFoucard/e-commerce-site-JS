let product = document.querySelector("#products");
let getbackThisProductArray = JSON.parse(localStorage.getItem("this-product"));
let quantity = document.querySelector("input");

product.append(clickOnProduct(getbackThisProductArray));

function clickOnProduct(product){
    let {
        sku,
        image,
        name,
        price,
        color
    } = product;

    let cart = document.createElement("div");
    cart.classList.add("product");
    cart.innerHTML= `<div class="image left-side">  <img src="${image}" width="600"> </div>
 <div class=" pictures-informations right-side">
     <h3 class="title">${name}</h3>
     <span class="center">
     <p class="price bigger">${price}</p>
     <span class="currency-do">$</span>
 </span>
     <p class="color">${color}</p>
     Select your Size :
     <select id="example">
         <option value="1"></option>
         <option value="2">38</option>
         <option value="7">39</option>
         <option value="7">40</option>
         <option value="7">41</option>
         <option value="7">42</option>
         <option value="7">43</option>
         <option value="7">44</option>
         <option value="7">45</option>
     </select>
     <input value=1>
     <button data-sku="${sku}" class="add-to-bag">ADD TO BAG</button>
     <span class="heart"><i class="fa fa-heart-o" aria-hidden="true"></i></span>
     </div>`;

let button = cart.querySelector("button");
button.addEventListener("click",onClickAddToCartButton)

     return cart;
}
function creatMiniCarteItem(product, quantity) {
    let {
        image,
        name,
        price,
    } = product;

    let miniCartItem = document.createElement("div");
    miniCartItem.classList.add("mini-cart-item");

    miniCartItem.innerHTML = `
                         <img src="${image}" width="430">
                         <div class="product-price-cart"> 
                              <h6 class="name-cart">Name :<br>${name}</h6>      
                              <span class="price-cart">Price :${price}</span><br>
                              Quantity : ${quantity}
                              <button class="Remove"><i class="fa fa-trash" aria-hidden="true"></i></button>
                         </div> 
                      <br>
                      `;

    let removeButton = miniCartItem.querySelector("button");
    removeButton.addEventListener("click", onClickRemoveButton);
    

    return miniCartItem;

}
function onClickRemoveButton(event) {
    let element = event.target;
    element.closest(".mini-cart-item").remove();

    let plusOne = document.querySelector("#shop-icon");
    if (plusOne.innerHTML > 0) {
        plusOne.innerHTML = (+plusOne.innerHTML) - 1;
    }

    localStorage.setItem("NbrsProduct",plusOne.innerHTML)

    let product = element.closest(".mini-cart-item");
    let price = product.querySelector(".price-cart");

    let totalprice = document.querySelector(".total-price");
    totalprice.innerHTML = +totalprice.innerHTML - price.innerHTML;

    let textNextToIconPanier = document.querySelector("#shop-icon");
    let panierIcon = document.querySelector("#panier-icon");
    if (textNextToIconPanier.innerHTML == 0) {
        panierIcon.classList.remove("block");
    }
    if(plusOne.innerHTML === "0"){
        localStorage.removeItem("clothes");
       localStorage.removeItem("NbrsItem");
    }
}
// Add products to Mini-Cart-Item  (to buy +1)
function onClickAddToCartButton(event) {

    let element = event.target;

    let PlusOne = document.querySelector("#shop-icon");
    PlusOne.innerHTML = (+PlusOne.innerHTML) + +1;

    localStorage.setItem("NbrsProduct",PlusOne.innerHTML);

    if (PlusOne.innerHTML > 30) {
        PlusOne.innerHTML = +PlusOne.innerHTML - 1;;
        alert("you cannot add more items to your basket");
        event.preventDefault();
    }
   
    let product = element.closest(".product");
    let quantity = product.querySelector(".quantity");
    let price = product.querySelector(".price");
    let image = product.querySelector("img");

    let totalprice = document.querySelector(".total-price");
    totalprice.innerHTML = +totalprice.innerHTML + +price.innerHTML;

    let sku = element.dataset.sku;

    let current = ArrayClothes.find(function (item) {
        return item.sku == sku
    });

    if(current == null){
         current = bags.find(function (item) {
            return item.sku == sku
    })}

     if (current == null){
        current = shoes.find(function (item) {
            return item.sku == sku
    })}
    if (current == null){
        current = arrayAccessories.find(function (item) {
            return item.sku == sku
    })}

    let miniCartItem = creatMiniCarteItem(current, quantity);
    document.querySelector(".mini-cart-items").append(miniCartItem);
    
        SaveProductsinLocalStorage(current)
        SaveNbrsProductLocalStorage()
    
        let end = document.querySelector(".end");
        end.classList.add("block");
}

function SaveProductsinLocalStorage(current){
let ArrayLocalStorage = JSON.parse(localStorage.getItem("clothes"));
    
if (ArrayLocalStorage) {
    ArrayLocalStorage.push(current);
    localStorage.setItem("clothes",JSON.stringify(ArrayLocalStorage));
}

else {
    ArrayLocalStorage = [];
    ArrayLocalStorage.push(current);
    localStorage.setItem("clothes",JSON.stringify(ArrayLocalStorage));
     }
    };
    
    function SaveNbrsProductLocalStorage(){
        let PlusOne = document.querySelector("#shop-icon");
        PlusOne = PlusOne.innerHTML
        localStorage.setItem("NbrsProduct",PlusOne);
    }
    let getback = localStorage.getItem("NbrsProduct")
    document.querySelector("#shop-icon").innerHTML = getback;

    
