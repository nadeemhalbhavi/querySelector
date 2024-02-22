// Write the code as shown in the video below:


const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center'

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray'
fruits.style.listStyleType = 'none'
fruits.style.margin = '30px'
fruits.style.padding = '30px'
fruits.style.width = '50%'
fruits.style.borderRadius = '5px'




const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown'
basketHeading.style.marginLeft = '30px'

const fruitItems1 = document.querySelectorAll('.fruit');
for (let i=0;i<fruitItems1.length; i++){
    fruitItems1[i].style.backgroundColor = 'white'
    fruitItems1[i].style.padding = '10px'
    fruitItems1[i].style.margin = '10px'
    fruitItems1[i].style.borderRadius = '5px'


    
}

const fruitItems = document.querySelectorAll('.fruit:nth-child(even)');

for(let i=0;i<fruitItems.length; i++){
  fruitItems[i].style.backgroundColor = 'red'
  fruitItems[i].style.color = 'white'
  
}

