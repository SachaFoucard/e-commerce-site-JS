let productsDiv  = document.querySelector("#products");
let localClothes = JSON.parse(localStorage.getItem("clothes"));
let miniCartItem = document.querySelector(".mini-cart-items");
let heartSave = document.querySelector(".heartFav");
localClothesHeart = JSON.parse(localStorage.getItem("clothes-Heart"));


bags.forEach(function(item){
    productsDiv.append(createProductElement(item));
    });
    
    localClothes.forEach(function(item){
        miniCartItem.append(creatMiniCarteItem(item));
     });
   
    
  localClothesHeart.forEach(function(item){
    heartSave.append(creatMiniCarteItem(item));
  });
    
  
    



  
    

    
    
    

        





     

       