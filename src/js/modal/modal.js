/* ==========================================================================
   #MODAL
   ========================================================================== */








const modalFunctionality = (() => {
  
  //Access relevant HTML modal elements
  const modalElements = {
    modal:  document.querySelector('.js-modal'),
    closeButton:  document.querySelector('.js-closeModal'),
    openButton:  document.querySelectorAll('.js-openModal')
  }


  //Turn nodeList into array
  const allOpenButtons = Array.from(modalElements.openButton);



  //Event listeners
  allOpenButtons.forEach(button => {

    button.addEventListener('click', _params => { 
      modalElements.modal.classList.add('is-open')
      document.documentElement.classList.add('modal-open');
    })
    
  })



  modalElements.closeButton.addEventListener('click', _params => { 

    modalElements.modal.classList.remove('is-open')
    document.documentElement.classList.remove('modal-open');

  })

})();










