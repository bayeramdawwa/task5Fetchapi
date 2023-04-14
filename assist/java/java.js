const cards = document.querySelector(".cards");
const one = document.querySelector(".one");
const three = document.querySelector(".three");
const tow= document.querySelector(".tow");
const searchButton=document.querySelector(".searchButton")
const back=document.querySelector(".back")
let data = [];
let firstdata = 0;
let finaldata = 10;


async function fetchProducts() {
  await fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => data = res.products);
    
    function appendtocards(first, final) {
      for (let i = first; i <= final-1; i++) {
        const product = data[i];
        appendNewItemIntocards(product.title,product.description, product.thumbnail,  product.price,);
        
      }
      
    }
    appendtocards(firstdata, finaldata) 
    

tow.addEventListener("click", function tow() 
  {
 
     cards.innerHTML = "";
  
    firstdata=10
    finaldata=20
  appendtocards(firstdata, finaldata)
  window.scrollTo({top: 0});
  }
);

three.addEventListener("click", function three() 
 {
  cards.innerHTML = "";
  firstdata=20
  finaldata=30
  appendtocards(firstdata, finaldata);
  window.scrollTo({top: 0});
});

one.addEventListener("click", function one() 
 {
  cards.innerHTML = "";
  firstdata=0
  finaldata=10
  appendtocards(firstdata, finaldata);
  window.scrollTo({top: 0});
});
back.addEventListener("click", function back() 
 {
  cards.innerHTML = "";
  firstdata=0
  finaldata=10
  appendtocards(firstdata, finaldata);
  window.scrollTo({top: 0});
  one.style.display="block";
  tow.style.display="block";
  three.style.display="block";
});
searchButton.addEventListener("click",function searchcard(){
  let input=document.querySelector(".searchInput").value.toUpperCase();
   console.log(input);
   const card=document.getElementsByClassName("card");
   
   cards.innerHTML = "";
     firstdata=0;
     finaldata=30;

   appendtocards(firstdata, finaldata);
   console.log(card);
    
   for (let i = 0; i < card.length; i++) {
     
      let title=card[i].querySelector(".card  h1");
    
      
      if(title.innerText.toUpperCase().indexOf(input)> -1){
          card[i].style.display="flex";
           one.style.display="none";
           tow.style.display="none";
           three.style.display="none";
           back.style.display="block";
          
      }
      
      else {
          card[i].style.display="none";
          one.style.display="none";
          tow.style.display="none";
          three.style.display="none";
          back.style.display="block";
      }
     
      function ClearFields() {

        document.querySelector(".searchInput").value = "";
      
   }
   ClearFields();
}})}
 


function appendNewItemIntocards(title, description, thumbnail, price) {
  const cards = document.querySelector(".cards");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const button = document.createElement("button");
  const button2= document.createElement("button");
  h1.innerText = title;
  p.innerText = description;
  img.src = thumbnail;
  p2.innerText = "price: " + price+"$";
  button.innerText = "Buy Now";
  button2.innerText = "Add To Cart";
  const div = document.createElement("div");
  div.classList.add("card");
  p2.classList.add("price");
  div.appendChild(h1);
  div.appendChild(img)
  div.appendChild(p);
  div.appendChild(p2);
  div.appendChild(button);
  div.appendChild(button2);
  cards.appendChild(div);
  back.style.display="none"; 
}


 fetchProducts();

