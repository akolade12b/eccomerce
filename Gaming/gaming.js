
import {gamingarr,savetostoragegaming } from "../array.js"
import { cartarray } from "../array.js"

export function gaming(){
let accagame=''
gamingarr.forEach((phone)=>{

accagame+=`

<button class="button buttons" data-name="${phone.name}' data-price="${phone.price}" data-img="${phone.img}"  data-pricen="${phone.pricen} " data-desc="${phone.desc}"  data-discountprice="${phone.discountprice}" data-category="${phone.category}" data-brandname="${phone.brandname}" ><img src="${phone.img}" height="208" 
width="208" class="img"><br>
 <div class="desc">${phone.name}</div>
 
 <div class="price">${phone.price}</div></button>


`


})
document.querySelector('.grid').innerHTML=accagame


document.querySelectorAll('.buttons').forEach((buttonss)=>{
buttonss.addEventListener('click',()=>{
let   buttonlists =buttonss.dataset
 let  imgb=buttonlists.img
 let  nameb=buttonlists.name
 let  priceb=buttonlists.price
 let  pricenb=buttonlists.pricen
 let descb =buttonlists.descb
 let categoryb=buttonlists.category
 let brandname=buttonlists.brandname
 let discountpriceb=buttonlists.discountprice

  document.querySelector('.grandparents').innerHTML=`
  <div class="parents">
  <div class="centers">
  <i class="fa-solid fa-x cancel"></i>
  <div style="padding-top: 10px;"><img src="${imgb}" width="258" height="208" class="im"></div>
  <div class="names">${nameb}</div>
  <div class="descr">Infinix Hot 30i (X669) 6.6, 128GB, UP TO 8GB RAM, 5000mAh, 13MP, 4G  </div>
  
  <div><button class="add" data-name="${nameb}" data-img="${imgb}" data-price="${priceb}" data-desc="${descb}" data-pricen="${pricenb}" data-discountprice="${discountpriceb}" data-category="${categoryb}"
  data-brandname="${brandname}"
  >Add to cart</button></div>
    </div></div>`
    document.querySelector('.products').classList.add('blur')
    document.querySelector('header').style.display='none'
    document.querySelector('.cancel').addEventListener('click',()=>{
   document.querySelector('.grandparents').innerHTML=''
   document.querySelector('.products').classList.remove('blur')
   document.querySelector('header').style.display='block'
   
    })
    document.querySelectorAll('.add').forEach((addbutton)=>{
      addbutton.addEventListener('click',()=>{

      let cart=addbutton.dataset;
      console.log(cart)
      let namec=cart.name
      let imgc=cart.img
      let descc=cart.desc
      let pricenc=cart.pricen
      let pricec=cart.price
      let discountpricec=cart.discountprice
      let categoryc=cart.category
cartarray.push({name:namec,img:imgc,desc:descc,pricen:pricenc ,price:pricec,discountprice:discountpricec,category:categoryc,})
console.log(cartarray)
      })
    })
    
})
})

console.log(gamingarr)

}






