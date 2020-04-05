/* ==========================================================================
   #MODAL
   ========================================================================== */










const simplusModal = () => {










/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */





  const selector = {
    MODAL         :  document.querySelectorAll('.js-modal'),
    MODAL_CONTENT :  document.querySelectorAll('.js-modal__content'),
    DATA_TOGGLE   :  document.querySelectorAll('[data-toggle="modal"]'),
    DATA_DISMISS  :  document.querySelectorAll('[data-dismiss="modal"]')
  }





/**
 * ------------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------------
 */





  let toggle = (elements, event, callback) => {
    if (elements.length) {  //Is elements more than one element 
      elements.forEach(element => element.addEventListener(event, callback));

    } else {
      return  elements.addEventListener(event, callback);

    }
   }






/**
 * ------------------------------------------------------------------------
 * Functionality
 * ------------------------------------------------------------------------
 */





  //Show modal
  toggle(selector.DATA_TOGGLE, 'click', function(_params){

    // Access button's target ID
    const target = this.dataset.target;

    //Access modal matching taret ID
    let modal = document.querySelector(target);

    modal.classList.add('is-open');
    document.documentElement.classList.add('modal-open');
    
  })





  //Dismiss modal
  toggle(selector.DATA_DISMISS, 'click', function (_params) {
  
    if(this.closest('.c-modal').classList.contains('is-open')) {
      this.closest('.c-modal').classList.remove('is-open') 
      document.documentElement.classList.remove('modal-open');
    }
    
  })





  //Dismiss modal by outside click
  toggle(selector.MODAL, 'click', function (event) {


    //If it can't find class name in ancestry the click is outside
    const isOutside = !event.target.closest('.c-modal__content');
    
    if(isOutside) {
      if(event.target.closest('.c-modal').classList.contains('is-open')) {
        event.target.closest('.c-modal').classList.remove('is-open') 
        document.documentElement.classList.remove('modal-open');
      }
    }

  })
  



  





};



// simplusModal();










