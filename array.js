
export let phonearr=JSON.parse(localStorage.getItem('phonearrs'))

if (!phonearr){phonearr=[{name:'Infinix Zero 30 5G 6.78" 256GB ROM/12GB RAM Android 13-Gold',
price:'423,000',pricen:4230000,
desc:'',
img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYNxGBtl71mr5EAPYeJyLapptUMYmfYpuDw&usqp=CAU' },

{
  name:' Infinix Hot 30i (X669) 6.6, 128GB, UP TO 8GB RAM,5000mAh, 13MP, 4G ',price:'215,000',pricen:215000,img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/7191732/1.jpg?0385"'
},
{
  name:'Infinix Zero Ultra 6.8 FHD+,13GB+256GB 5G ANDROID 12-Noir',
price:'215,000' ,pricen:215000,img:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/73/7941862/1.jpg?5537'
},
{
  name:'Infinix Note 11 Pro - 6.95" FHD+ (8GB RAM, 128GB ROM) Android 11 (64/13/2)MP + 16MP ',
price:'215,000',pricen:215000, img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/657079/1.jpg?3399'},
{
  name:'itel S23+ 6.6" 8GB RAM/256GB ROM Android 12 - Cyan',
price:'215,000',pricen:215000,img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/4046952/1.jpg?6367'
},

{
  name:'Samsung Galaxy A04s 6.5" 4GB RAM/128GB ROM Android 12 - Black',
price: '215,000',pricen: 215000, 
img:'https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/49/9035102/1.jpg?7464'
},

]}


export function savetostorage(){
  localStorage.setItem('phonearrs',JSON.stringify(phonearr))
}


savetostorage()





export let super_marketarr=JSON.parse(localStorage.getItem('supermarket'))
if(!super_marketarr){
  super_marketarr=[]
}

export function savetostoragesuper(){
  localStorage.setItem('supermarket',JSON.stringify(super_marketarr))
}
savetostorage()

export let fashionarr=JSON.parse(localStorage.getItem('fashion'))
if(!fashionarr){
  fashionarr=[]
}

export function savetostoragefashion(){
  localStorage.setItem('fashion',JSON.stringify(fashionarr))
}
savetostoragefashion()

export let electronicsarr=JSON.parse(localStorage.getItem('electronics'))
if(!electronicsarr){
  electronicsarr=[]
}

export function savetostorageelectronics(){
  localStorage.setItem('electronics',JSON.stringify(electronicsarr))
}
savetostorageelectronics()

export let gamingarr=JSON.parse(localStorage.getItem('gaming'))
if(!gamingarr){
  gamingarr=[]
}

export function savetostoragegaming(){
  localStorage.setItem('gaming',JSON.stringify(gamingarr))
}
savetostoragegaming()


export let cartarray =JSON.parse(localStorage.getItem('cart'))
if(!cartarray){
  cartarray=[{
    name:' Infinix Hot 30i (X669) 6.6, 128GB, UP TO 8GB RAM,5000mAh, 13MP, 4G ',price:'215,000',pricen:215000,img:'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/7191732/1.jpg?0385"'
  },]
}
export function savetostoragecartarray(){
localStorage.setItem('cart',JSON.stringify(cartarray))
}
savetostorage()

export let productinfo =JSON.parse(localStorage.getItem('info'))
if(!productinfo){
  productinfo=[]
}
export function savetostorageproductinfo(){
localStorage.setItem('info',JSON.stringify(productinfo))
}
savetostorageproductinfo()



