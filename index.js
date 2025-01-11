const NewJeans1 = document.querySelector('#NewJeans1');
const Songs1 = document.getElementById('songs1');

const GetUp = document.querySelector('#GetUp');
const Songs2 = document.getElementById('songs2');

const videoIframe1 = Songs1.querySelectorAll('iframe');

const videoIframe2 = Songs2.querySelectorAll('iframe');



// toggle button
const toggleBtn = document.getElementById('toggle');
const menuBar = document.getElementById('menu');


toggleBtn.addEventListener('click', function(){
   menuBar.classList.toggle('hidden');
});

// Hide menu when clicking outside of it
document.addEventListener('click', function (e) {
   if (!menuBar.classList.contains('hidden') && !menuBar.contains(e.target) && e.target !== toggleBtn) {
      menuBar.classList.add('hidden');
   }
});


// toggle songs 1 
NewJeans1.addEventListener('click', function() {
   Songs1.classList.toggle('hidden');   
});

// Close modal when clicking outside
Songs1.addEventListener('click', (e) => {
   if (e.target === Songs1) {
      Songs1.classList.toggle('hidden');

      if (Songs1.classList.contains('hidden')) {
         videoIframe1.forEach((iframe) => {
            iframe.src = iframe.src;
         });
      }
   }
});


// toggle songs 2
GetUp.addEventListener('click', function() {
   Songs2.classList.toggle('hidden');   
});

// Close modal when clicking outside
Songs2.addEventListener('click', (e) => {
   if (e.target === Songs2) {
      Songs2.classList.toggle('hidden');

      if (Songs2.classList.contains('hidden')) {
         videoIframe2.forEach((iframe) => {
            iframe.src = iframe.src;
         });
      }
   }
});

//menu resize
window.addEventListener('DOMContentLoaded', function(){

   const mdBr = 768;

   function toggleMenu() {
      if (window.innerWidth >= mdBr ){
         menuBar.classList.remove('hidden');
      } else {
         menuBar.classList.add('hidden');
      }
   };

   toggleMenu();
   
   window.addEventListener('resize', toggleMenu);
});