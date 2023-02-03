/*let titles = document.querySelectorAll("#title");
let dropDowns = document.querySelector("#selected-Filter");
for (let i = 0; i < title.length; i++) {
   titles[i].addEventListener("mouseover", down);
}
for (let i = 0; i < title.length; i++) {
   titles[i].addEventListener("click", clickleavedown);
}

function clickleavedown() {
   let parent = this.parentElement;
   let filterChoose = parent.querySelector(".filter-choose").classList.toggle("none");
}

function down() {
   let parent = this.parentElement;
   let filterChoose = parent.querySelector(".filter-choose").classList.toggle("none");
}
// change the language
let language = document.querySelector("#language");
let dropDownLanguage = document.querySelector(".language-drop-down");
language.addEventListener("click", changeLanguage);

function changeLanguage() {
   dropDownLanguage.classList.toggle("none");
}
// משתנים לאוספה לסל 
let iconsFixedRightBasket = document.querySelector(".shop-icon");
let iconsFixedRightHeart = document.querySelector(".heart-icon");
let toAdds = document.querySelectorAll(".button-to-add");
let tosaves = document.querySelectorAll(".save");
counter = document.querySelector(".counter");

let totalprice = document.querySelector(".total-price");
let minicartitems = document.querySelector(".mini-cart-items")


// for (let i = 0; i < toAdds.length; i++) {
//    toAdds[i].addEventListener("click", add)
// }

if (toAdds.length > 0){
   toAdds.forEach(function(toAdds){
      toAdds.addEventListener("click", add);
   });

for (let i = 0; i < tosaves.length; i++) {
   tosaves[i].addEventListener("click", addheart)
}

function add() {
   let price = this.previousElementSibling;
   iconsFixedRightBasket.innerHTML = +(iconsFixedRightBasket.innerHTML) + 1;
   totalprice.innerHTML = +totalprice.innerHTML + +(price.innerHTML);
   let productDiv = this.parentElement.parentElement;
   let bigDiv = productDiv.parentElement;
   let image = bigDiv.querySelector("img");
   let name = productDiv.querySelector(".name").innerHTML
   let imageSource = image.getAttribute("src");
   let item = document.createElement("div");
   item.classList.add("item");
   item.innerHTML = `
                     <div class="content-all"> 
                              <img src="${imageSource}"width="330">
                         <div class="product-price-cart"> 
                              <h6 class="name-cart">${name}</h6>      
                              <span class="price-cart ">${price.innerHTML}</span><br>
                              <span class="quantity">Quantity:1</span>
                              <button class="Remove">Remove</button>
                         </div> 
                      </div> `
   minicartitems.prepend(item);
   let buttonRemove = item.querySelector(".Remove");
   buttonRemove.addEventListener("click", functRemove);
}

function functRemove() {

iconsFixedRightBasket.innerHTML = iconsFixedRightBasket.innerHTML -1;

let productPrice = this.closest(".product-price-cart");
let price = productPrice.querySelector(".price-cart");

let totalprice = document.querySelector(".total-price");
totalprice.innerHTML = +totalprice.innerHTML - (+price.innerHTML);
this.closest(".item").remove();




}
function addheart() {
   iconsFixedRightHeart.innerHTML = +(iconsFixedRightHeart.innerHTML) + 1;
}
let registerdropdown = document.querySelector("#register");
let registerdropdowninfomartion = document.querySelector(".register-drop-down");
registerdropdown.addEventListener("mouseover", ouvre);

function ouvre() {
   registerdropdowninfomartion.classList.toggle("none");
}
let closea = document.querySelector("#close");
closea.addEventListener("click", closex);

function closex() {
   registerdropdowninfomartion.classList.add("none");
}


let panierIcon = document.querySelector("#panier-icon");
panierIcon.addEventListener("click", PanierOpen)
let textNextToIconBasket = document.querySelector(".shop-icon");
function PanierOpen() {
   
   let minicartitems = document.querySelector(".mini-cart-items");
   minicartitems.classList.toggle("block");

   }
}
*/

