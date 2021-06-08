'use strict'

let image = document.querySelector('.pepsi');

let pepsi_logo = document.querySelectorAll('.pepsi-logo');
let container = document.querySelector('.container');


let nav = document.querySelector('.navbar');

let handler = document.querySelector('.main')

let box_1 = document.querySelector('.box-1')
let logo = document.querySelector('.logo');
let close = document.querySelector('.icon');

let data = '1';

pepsi_logo.forEach(ele => {
    ele.addEventListener('click',function()
    {
         data = ele.getAttribute('data-src');
        console.log(typeof data);

         image.src = `./Img/PEPSI-${data}.png`

         if(data === '1')
         {
             nav.style.backgroundColor = '#0156a5';
             box_1.style.backgroundColor = '#0156a5';
             container.style.backgroundColor = '#0156a5';
            
            
         }

         else if(data == '3')
         {
             nav.style.backgroundColor = '#DE3163';
             box_1.style.backgroundColor = '#DE3163';
             container.style.backgroundColor = '#DE3163';
             
           
         }

         else{
            
             nav.style.backgroundColor = 'black';
             box_1.style.backgroundColor = 'black';
             container.style.backgroundColor = 'black';

            
         }






    });
})

handler.addEventListener('click',function() {

   nav.classList.toggle('navbar-new');
   nav.classList.toggle('navbar');
   close.classList.toggle('hidden');
   nav.style.backgroundColor='white';

   box_1.classList.toggle('hidden');
  

})

close.addEventListener('click',function()
{
    nav.classList.toggle('navbar-new');
    nav.classList.toggle('navbar');
    close.classList.toggle('hidden');
    nav.style.backgroundColor='white';

    box_1.classList.toggle('hidden');

    if(data === '1')
    {
        nav.style.backgroundColor = '#0156a5';
        box_1.style.backgroundColor = '#0156a5';
        container.style.backgroundColor = '#0156a5';
       
       
    }

    else if(data == '3')
    {
        nav.style.backgroundColor = '#DE3163';
        box_1.style.backgroundColor = '#DE3163';
        container.style.backgroundColor = '#DE3163';
        
      
    }

    else{
       
        nav.style.backgroundColor = 'black';
        box_1.style.backgroundColor = 'black';
        container.style.backgroundColor = 'black';

       
    }


    
    
})