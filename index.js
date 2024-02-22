// Write the code as shown in the video below:

// Write answer to the questions asked below:

const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown'

const fruitItems = document.querySelectorAll('.fruit:nth-child(even)');

for(let i=0;i<fruitItems.length; i++){
  fruitItems[i].style.backgroundColor = 'red'
  fruitItems[i].style.color = 'white'
  
}

