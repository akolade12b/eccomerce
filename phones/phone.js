
import {phonearr,savetostorage } from "../array.js"

import { cartarray,savetostoragecartarray,productinfo,savetostorageproductinfo } from "../array.js"
console.log(phonearr)

let acca=''
phonearr.forEach((phone)=>{

acca+=`

<button class="button buttons" data-name="${phone.name}" 
data-price="${phone.price}" data-img="${phone.img}"  data-pricen="${phone.pricen}" data-desc="${phone.desc}"
data-category="${phone.category}" data-brandname="${phone.brandname}"  data-discountprice="${phone.discountprice}"

><img src="${phone.img}" height="208" 
width="208" class="img"><br>
 <div class="desc">${phone.name}</div>
 
 <div class="price">${phone.price}</div></button>


`


})

document.querySelector('.grid').innerHTML=acca


document.querySelectorAll('.buttons').forEach((buttonss)=>{
buttonss.addEventListener('click',()=>{
let   buttonlists =buttonss.dataset
 let  imgb=buttonlists.img
 let  nameb=buttonlists.name
 let  priceb=buttonlists.price
 let  pricenb=buttonlists.pricen
 let descb =buttonlists.desc
 let categoryb=buttonlists.category
 let brandnameb=buttonlists.brandname
 let discountpriceb=buttonlists.discountprice

 console.log(buttonlists)


//onclick product info should be pushed into the productinfo array so it can be exported into the product info page 
productinfo.splice(0)
 productinfo.push({name:nameb,img:imgb,desc:descb,pricen:pricenb
,price:priceb,discountprice:discountpriceb,category:categoryb,brandname:brandnameb})
savetostorageproductinfo()
//immediately its been pushed the windows location should change to the product info page
window.location='../../productinfo.html'
console.log(productinfo)








  document.querySelector('.grandparents').innerHTML=`
  <div class="parents">
  <div class="centers">
  <i class="fa-solid fa-x cancel">x</i>
  <div style="padding-top: 10px;"><img src="${imgb}" width="258" height="208" class="im"></div>
  <div class="names">${nameb}</div>
  <div class="descr">Infinix Hot 30i (X669) 6.6, 128GB, UP TO 8GB RAM, 5000mAh, 13MP, 4G  </div>
  
  <div><button class="add" data-name="${nameb}" data-img="${imgb}" data-price="${priceb}" data-desc="${descb}" data-pricen="${pricenb}"  data-discountprice="${discountpriceb}" data-category="${categoryb}"
  data-brandname="${brandnameb}"
  >Add to cart</button></div>
    </div></div>`
    document.querySelector('.products').classList.add('blur')
    document.querySelector('header').style.display='none'
    document.querySelector('.cancel').addEventListener('click',()=>{
   document.querySelector('.grandparents').innerHTML=''
   document.querySelector('.products').classList.remove('blur')
   document.querySelector('header').style.display='block'
    })


    //add to cart
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
cartarray.push({name:namec,img:imgc,desc:descc,pricen:pricenc
  ,price:pricec,discountprice:discountpricec,category:categoryc})
console.log(cartarray)
      })
    })
    










})


})

console.log(phonearr)



document.querySelector('.super_market').addEventListener('click',()=>{
  document.querySelector('.super_market_items').classList.toggle('visible')
 supermarket()
})


document.querySelector('.fashion').addEventListener('click',()=>{
  document.querySelector('.fashion_items').classList.toggle('visible')
  fashion()
 
})

document.querySelector('.electronics').addEventListener('click',()=>{
  document.querySelector('.electronics_items').classList.toggle('visible')
 electronics()
})
document.querySelector('.gaming').addEventListener('click',()=>{
  document.querySelector('.gaming_items').classList.toggle('visible')
  gaming()
 
})


