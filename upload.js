import { phonearr,savetostorage,super_marketarr,savetostoragesuper,fashionarr,savetostoragefashion,electronicsarr,savetostorageelectronics,gamingarr,savetostoragegaming } from "./array.js";

console.log('a')
document.querySelector('.upload').addEventListener('click', function(event){
  event.preventDefault();
console.log('a')
let productName = document.querySelector('.product_nameinp').value;
let productPrice = document.querySelector('.price_inp').value;
let discountprice=document.querySelector('.d_price_inp').value
let description=document.querySelector('.t_area').innerHTML
let category=document.querySelector('.category').value
let brandname=document.querySelector('.b_name_inp').value

// Get the selected file
let images = document.querySelector('.image').files[0];

// Read the file as a data URL
const reader = new FileReader();

reader.onload = function(e) {
  // Create an object for the product
  const product = {
      name: productName, price:productPrice, discountprice:discountprice,
      img: e.target.result, category:category, brandname:brandname, desc:description
  };


  if(productName==='' || productPrice===''|| discountprice===''||brandname===''){
    console.log('error while filling value')
   }
   
 // loop()

     else if(category==='Phones'){
         phonearr.push(product);
          savetostorage()
        }

}

reader.readAsDataURL(images);
console.log(phonearr)

console.log(phonearr)
})

 




  