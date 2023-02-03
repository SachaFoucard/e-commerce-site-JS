let product = document.querySelector(".main-pictures");
let miniCartItem = document.querySelector(".mini-cart-items");
let localClothes = JSON.parse(localStorage.getItem("clothes"));
let heartSave = document.querySelector(".heartFav");
localClothesHeart = JSON.parse(localStorage.getItem("clothes-Heart"));


ArrayClothes.forEach(function(item){
    product.prepend(createProductElement(item));
});

localClothes.forEach(function(item){
    miniCartItem.append(creatMiniCarteItem(item));
 });

 localClothesHeart.forEach(function(item){
    heartSave.append(creatMiniCarteItem(item));
  });
