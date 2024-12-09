



 const icon=document.querySelector(".icon");
 const close=document.querySelector(".close");
 const body=document.querySelector("body");

 const cards=document.querySelector(".cards")

 icon.addEventListener("click",()=>{
  document.getElementById("listgroup").style.display='block'
  document.getElementById("listgroup").style.transition='1s'

 })
 close.addEventListener("click",()=>{
  document.getElementById("listgroup").style.display='none'
  document.getElementById("listgroup").style.transition='1s'

 })
 let products=[
  {
    id:1,
    image:'./../assets/images/image-brownie-desktop.jpg',
    name:"product name 1",
    price:20.00
 },
 {
  id:2,
  image:'./../assets/images/image-cake-desktop.jpg',
  name:"product name 2",
  price:10.00
}, {
  id:3,
  image:'./../assets/images/image-macaron-desktop.jpg',
  name:"product name 3",
  price:40.00
}, {
  id:4,
  image:'./../assets/images/image-creme-brulee-desktop.jpg',
  name:"product name 4",
  price:20.00
}, {
  id:5,
  image:'./../assets/images/image-waffle-desktop.jpg',
  name:"product name 5",
  price:50.00
}, {
  id:6,
  image:'./../assets/images/image-tiramisu-desktop.jpg',
  name:"product name 6",
  price:25.00
},
];

let productCart=[];

function creatlist(){
  products.forEach((value,key)=>{
    const newDiv=document.createElement("div");
    newDiv.classList.add("card")
    newDiv.innerHTML=`
                  <img src=${value.image} />
                  <h2>${value.name}</h2>
                  <p>$${value.price}</p>
                  <button onclick="addtocart(${key})" class="add">add to cart</button>
                  `;
            cards.append(newDiv)
  })
}
creatlist()



const lists=document.querySelector(".lists");
function addtocart(key){
  if(productCart[key]==null){
      productCart[key]=products[key]
      productCart[key].quantity=1
  }
  reloadcart()
}
let total=document.querySelector(".total");
let quantity=document.querySelector(".quantity");

function reloadcart(){
  lists.innerHTML="";
  let totalprice=0;
  let count=0;
  productCart.forEach((value,key)=>{
    totalprice=totalprice+value.price;
    count=count+value.quantity;

    if(value!=null){
      const newDiv=document.createElement("div")
          newDiv.classList.add("small-list")
          newDiv.innerHTML=`<div>
                              <div class="imgg"> <img src=${value.image}>
                              <p>${value.name}</p>
                              </div>                                                      
                            <p>$${value.price.toLocaleString()}</p>  
                             <div class="nan">
                                  <button onclick="change(${key},${value.quantity-1})"> -</button>
                                    <span>${value.quantity}</span>
                                  <button  onclick="change(${key},${value.quantity+1})">+</button>

                                </div>     
                               </div>
                                      `
                                lists.append(newDiv)

    }

  })
  quantity.innerHTML=count;
  total.innerHTML=totalprice.toLocaleString();
}

function change(key,quantity){
 if(quantity==0){
  delete productCart[key];
 }else{
  productCart[key].quantity=quantity;
  productCart[key].price= quantity * products[key].price;
  console.log(price)
  console.log(quantity)
 }
 reloadcart()
}





 






