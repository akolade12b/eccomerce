import {cartarray, savetostoragecartarray } from "./array.js";
console.log(cartarray)
//cartarray.splice(0)
//savetostoragecartarray()

/*cartarray.forEach((product)=>{
  acca+=`  
   <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start " style="border: 1px solid black;" >     <img src="${product.img}" alt="product-image" class="w-full rounded-lg sm:w-40" />
  <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
    <div class="mt-5 sm:mt-0">
      <h2 class="text-lg font-bold text-gray-900">${product.name}</h2>

    </div>
    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
      <div class="flex items-center border-gray-100">
        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50 minus"> - </span>
        <input class="h-8 w-8 border bg-white text-center text-xs outline-none productlenght" type="number" value="${product.productlenght}" min="1" />
        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50 add"> + </span>
      </div>
      <div class="flex items-center space-x-4">
        <p class="text-sm">$${product.price}</p>
      
      </div>
    </div>
  </div>
</div></div>
   `
})

document.querySelector('.item').innerHTML=acca*/
function loop(){
  let acca=''
    for(let i=0;i<cartarray.length;i++){

    let arr=cartarray[i]
    console.log(arr)
  
      acca+=`  <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start " style="border: 1px solid black;" >     <img src="${arr.img}" alt="product-image" class="w-full rounded-lg sm:w-40" />
      <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div class="mt-5 sm:mt-0">
          <h2 class="text-lg font-bold text-gray-900">${arr.name}</h2>
          <div style="margin-top:5px;font-weight:400;font-family:Verdana, Geneva, Tahoma, sans-serif">${arr.brandname}</div>
    <div style="margin-top:5px">
    <div style="display:inline; font-weight:bold;">Qty</div>
    : ${arr.productlenght} 
     <i class="fa-solid fa-trash trash" style="margin-left:15px" data-number="${i}"
    ></i></div>
        </div>
   
          <div class="flex items-center space-x-4">
            <p class="text-lg" style="font-weight:700;color:blue">$${arr.price}</p>
          
          </div>
        </div>
      </div>
    </div></div>`
    

  }
  document.querySelector('.item').innerHTML=acca


  let subtotalprice=Number(0)
  cartarray.forEach((cart)=>{
  subtotalprice+=Number(cart.price)
  })
  
  console.log(subtotalprice)
  document.querySelector('.subtotal').innerHTML=`$${subtotalprice}`
  
  
  let shipping= Number(500)
  document.querySelector('.shipping').innerHTML=`$${shipping}`
  
  
  let totalprice = shipping+subtotalprice
  
  document.querySelector('.total').innerHTML=`$${totalprice}`


  document.querySelectorAll('.trash').forEach((trash)=>{
    let nu=trash.dataset
   let productno=nu.number
    trash.addEventListener('click',()=>{
      cartarray.splice(productno,1);   savetostoragecartarray();loop()
   
    })
    })




}


  loop()

 

   // Re-render the items after removing
  
  /*  let number= Number(document.querySelector('.productlenght').value)
    document.querySelectorAll('.add').forEach((add)=>{
      add.addEventListener('click',()=>{
          number=number+1
          document.querySelectorAll('.productlenght').forEach((lenght)=>{
    lenght.value=number
          })
      })
      })
      
      
      document.querySelectorAll('.minus').forEach((minus)=>{
          minus.addEventListener('click',()=>{
              if(number>1){
              number=number-1
      
              document.querySelector('.productlenght').value=number}
      
          })
          })*/

    
    