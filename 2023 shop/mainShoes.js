
let localClothes = JSON.parse(localStorage.getItem("clothes"));
let miniCartItem = document.querySelector(".mini-cart-items");
let productsDivPTwo = document.querySelector("#shoes-container");
let heartSave = document.querySelector(".heartFav");
localClothesHeart = JSON.parse(localStorage.getItem("clothes-Heart"));

// print all products //html-js //
shoes.forEach(function(item){
    productsDivPTwo.append(createProductElement(item));
    });

// local storage mini cart for clothes //
localClothes.forEach(function(item){
    miniCartItem.append(creatMiniCarteItem(item));
 });

 localClothesHeart.forEach(function(item){
    heartSave.append(creatMiniCarteItem(item));
 });




