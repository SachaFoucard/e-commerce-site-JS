function createProductElement(product){
    let {
        sku,
        image,
        name,
        price,
        color
    } = product;

    let DivproductBag = document.createElement("div");
    DivproductBag.classList.add("product");

    DivproductBag.innerHTML = `
    <a href="ClickOnProduit.html"><img src="${image}" data-sku="${sku}" width="330"></a>
                    <div class="photo-description">
                    <p class="name">${name}</p>
                    <span class="product-price">
                    <button id="save"  data-sku="${sku}" class="save"><i class="fa fa-heart-o" data-sku="${sku}"  aria-hidden="true"></i></button>
                    <span class="currency">$</span>
                    <a class="price">${price}</a>
                    <button id="sale" data-sku="${sku}" data-color="${color}" class="button-to-add"> <i class="fa fa-cart-plus" data-sku="${sku}" aria-hidden="true"></i> </button>
                    </span>
                    <input type="text" placeholder="quantity"  value=1  class="quantity">
                    </div> `;

let clickOnImage = DivproductBag.querySelector("img");
clickOnImage.addEventListener("click",ThisProductOnLocalStorage);

    let button = DivproductBag.querySelector("#sale");
    button.addEventListener("click", onClickAddToCartButton);

    let buttonHeart = DivproductBag.querySelector("#save");
    buttonHeart.addEventListener("click", onClickAddToCartButtonHeart);

    
    return DivproductBag;

}
function ThisProductOnLocalStorage(event){
let element = event.target;

let sku = element.dataset.sku

let currentClothes = ArrayClothes.find(function(item){
    return item.sku == sku;
});

    localStorage.setItem("this-product",JSON.stringify(currentClothes));
}

function onClickAddToCartButton(event) {

    let element = event.target;

    let PlusOne = document.querySelector("#shop-icon");
    PlusOne.innerHTML = (+PlusOne.innerHTML) + +1;

    if (PlusOne.innerHTML > 30) {
        PlusOne.innerHTML = +PlusOne.innerHTML - 1;;
        alert("you cannot add more items to your basket");
        event.preventDefault();
    }
    SaveNbrsProductLocalStorage()
    let product = element.closest(".product");
    let quantity = product.querySelector(".quantity");
    let price = product.querySelector(".price");
    let image = product.querySelector("img");


    let totalprice = document.querySelector(".total-price");
    totalprice.innerHTML = +totalprice.innerHTML + +price.innerHTML;

    let sku = element.dataset.sku;

    let currentClothes = ArrayClothes.find(function (item) {
        return item.sku == sku
    })

    SaveProductsinLocalStorage(currentClothes)

    let end = document.querySelector(".end");
    end.classList.add("block");
    
     
            let miniCartItem = creatMiniCarteItem(currentClothes, quantity.value);
            document.querySelector(".mini-cart-items").append(miniCartItem);
 }

 function SaveNbrsProductLocalStorage(){
    let PlusOne = document.querySelector("#shop-icon");
    PlusOne = PlusOne.innerHTML
    localStorage.setItem("NbrsProduct",PlusOne);
}
let getback = localStorage.getItem("NbrsProduct"); 
document.querySelector("#shop-icon").innerHTML = getback;

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
                              <span class="price-cart">Price :${price*quantity}</span><br>
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

function SaveProductsinLocalStorage(currentClothes){
    let ArrayLocalStorage = JSON.parse(localStorage.getItem("clothes"));
    
    if (ArrayLocalStorage) {
        ArrayLocalStorage.push(currentClothes);
        localStorage.setItem("clothes",JSON.stringify(ArrayLocalStorage));
    }
    
    else {
        ArrayLocalStorage = [];
        ArrayLocalStorage.push(currentClothes);
        localStorage.setItem("clothes",JSON.stringify(ArrayLocalStorage));
         }
    }
    
    
    function onClickAddToCartButtonHeart(event) { 
        let element = event.target;
        let PlusOneHeart = document.querySelector(".heart-icon");
        PlusOneHeart.innerHTML = (+PlusOneHeart.innerHTML) + +1;

        localStorage.setItem("Nbrs-Product-InSaves",PlusOneHeart.innerHTML);
        SaveNbrsHeartSaveProductInSaveLocalStorage()
    
        let product = element.closest(".product");
        let quantity = product.querySelector(".quantity");
        let price = product.querySelector(".price");
    
        let sku = element.dataset.sku;
    
        let currentClothes = ArrayClothes.find(function (item){
            return item.sku == sku;
        });
    
        let heartFav = document.querySelector(".heartFav");
        heartFav.classList.add("block");
    
        SaveProductsinHeartLocalStorage(currentClothes)

        let miniCartItem = creatMiniCarteItemFavHeart(currentClothes, quantity.value, );
        document.querySelector(".heartFav").append(miniCartItem);

     
    }
function SaveNbrsHeartSaveProductInSaveLocalStorage(){
    let PlusOneHeart = document.querySelector(".heart-icon");
    localStorage.setItem("Nbrs-Product-InSaves",PlusOneHeart.innerHTML);
}
let get = localStorage.getItem("Nbrs-Product-InSaves");
document.querySelector(".heart-icon").innerHTML = get;

    function SaveProductsinHeartLocalStorage(currentClothes){
        let ArrayLocalStorage = JSON.parse(localStorage.getItem("clothes-Heart"));
        
        if (ArrayLocalStorage) {
            ArrayLocalStorage.push(currentClothes);
            localStorage.setItem("clothes-Heart",JSON.stringify(ArrayLocalStorage));
        }
        
        else {
            ArrayLocalStorage = [];
            ArrayLocalStorage.push(currentClothes);
            localStorage.setItem("clothes-Heart",JSON.stringify(ArrayLocalStorage));
             }
        }
       

    function creatMiniCarteItemFavHeart(product, quantity) {
        let {
            name,
            price,
            image,
        } = product;
    
        let miniCartItem = document.createElement("div");
        miniCartItem.classList.add("mini-cart-item");
    
        miniCartItem.innerHTML = `
                                  <img src="${image}" width="130">
                             <div class="product-price-cart"> 
                                  <h6 class="name-cart">Name : <br>${name}</h6>      
                                  <span class="price-cart ">Price : ${price*quantity}</span><br>
                                  Quantity : ${quantity}
                                  <button class="Delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
                             </div> 
                             <br>
                          `;
    
        let removeButtonHeart = miniCartItem.querySelector("button");
        removeButtonHeart.addEventListener("click", HeartRemoveButton);
    
    
        return miniCartItem;
    
    }
   
        function HeartRemoveButton(event) {
            let element = event.target;
            element.closest(".mini-cart-item").remove();
        
            let minusOne = document.querySelector(".heart-icon");
            if (minusOne.innerHTML > 0) {
                minusOne.innerHTML = (+minusOne.innerHTML) - 1;
            }
        
        };
        
        let panierIcon = document.querySelector("#panier-icon");
        panierIcon.addEventListener("click", PanierOpen)

        function PanierOpen() {
            let textNextToIconBasket = document.querySelector("#shop-icon");
            let end = document.querySelector(".end");
            end.classList.toggle("block");
        };


 let HeartIcon = document.querySelector("#heart-icon");
 HeartIcon.addEventListener("click", PanierOpenHeart);

function PanierOpenHeart() {
    let textNextToIconHeart = document.querySelector(".heart-icon");
    let heartFav = document.querySelector(".heartFav");
    heartFav.classList.toggle("block");

};
function SearchBar() {
    let parent = this.parentElement;
    let filterChoose = parent.querySelector(".filter-choose").classList.toggle("none");
}

// Filter (Colors,Sizes,Prices...)
let titles = document.querySelectorAll("#title");
let dropDowns = document.querySelector("#selected-Filter");
for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener("click", SearchBar);
}

function SearchBar() {
    let parent = this.parentElement;
    let filterChoose = parent.querySelector(".filter-choose").classList.toggle("none");
}
// Filter (Colors,Sizes,Prices...)
let linkTitles = document.querySelectorAll(".filter-choose");
let liensSmall = document.querySelectorAll(".filter-choose a");
for (let j = 0; j < liensSmall.length; j++) {
    liensSmall[j].addEventListener("click", clickerlink)
}

function clickerlink(event) {
    let element = event.target;
    
    let product = document.querySelector(".main-pictures");

    let filterArray = ArrayClothes.filter(item => item.Material == element.innerHTML || item.color == element.innerHTML || item.Date == element.innerHTML);
  

    product.innerHTML = " ";

    filterArray.forEach(function (item) {
        product.prepend(createProductElement(item));
    });

    let numberItems = document.querySelector("#numberItems");

    numberItems.innerHTML = `<p>There is ${filterArray.length} items founds</p>`;
}

// MouseOver on the IconOfClient to open the Menu
// MouseOver on the IconOfClient to open the Menu
let registerdropdown = document.querySelector("#register");
let registerdropdowninfomartion = document.querySelector(".register-drop-down");
registerdropdown.addEventListener("mouseover", OpenClientIcon);

function OpenClientIcon() {
    registerdropdowninfomartion.classList.toggle("none");
}

let closea = document.querySelector("#close");
closea.addEventListener("click", closex);
function closex() {
    registerdropdowninfomartion.classList.add("none");
}

let GetProduct = document.querySelector("#GetProduct");
GetProduct.addEventListener("click", search)
function search() {
    let product = document.querySelector(".main-pictures");

    let input = document.querySelector("#site-search");

    let filteredClothesArray = ArrayClothes.filter(item => item.color == input.value);

    product.innerHTML = "";

    filteredClothesArray.forEach(function (item) {
        product.prepend(createProductElement(item));
    })


    if (filteredClothesArray.length == 0) {
        product.innerHTML = "Select another color";
    }
}

// Slider 
const items = document.querySelectorAll("img");
const nbSlide = items.length;
const next = document.querySelector(".btn-right button");
const last = document.querySelector(".btn-left button");
let count = 0;

next.addEventListener("click",NextSlides);
function NextSlides(){
    items[count].classList.remove("active");
    if (count < nbSlide - 1) {
        count++;
    }
    else{
        count = 0;
    }
    items[count].classList.add("active"); 

    last.addEventListener("click",LastSlides);
}
 function LastSlides(){
    items[count].classList.remove("active");
    if (count > 0) {
        count--;
    }
    else {
        count = nbSlide -1;
    }
    items[count].classList.add("active");
 }
 