'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnOpenModals = document.querySelectorAll('.show-modal');

const openModal = function(){
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i< btnOpenModals.length; i++) 
  btnOpenModals[i].addEventListener('click',openModal);


 btnClosemodal.addEventListener('click', closeModal);
 overlay.addEventListener('click',closeModal);

//

document.addEventListener('keydown',function(e){
  // console.log('A key was pressed');
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')){
    closeModal();
  }
  
  
});
































