/* ==========================================================================
   #MODAL
   ========================================================================== */










/**
 * 1. Modal button includes                : data-toggle="modal", data-target="#yourID"
 * 2. Modal includes                       : the modal ID and class: js-modal
 * 3. c-modal__content includes            : js-modalContent  
 * 4. Close button includes                : data-dismiss="modal"
 * 5. data-target should include "#"" ex   : data-target="#example"
 */


/**
 * ##OPTIONS
 * 1. data-backdrop="static" - Prevents modal close by clicking outside
 * 
 */










const simplusModal = () => {









/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */





  const selector = {
    MODAL         :  document.querySelectorAll('.js-modal'),
    MODAL_CONTENT :  document.querySelectorAll('.js-modalContent'),
    DATA_TOGGLE   :  document.querySelectorAll('[data-toggle="modal"]'),
    DATA_DISMISS  :  document.querySelectorAll('[data-dismiss="modal"]')
  }


  


/**
 * ------------------------------------------------------------------------
 * Helpers
 * ------------------------------------------------------------------------
 */





  let toggle = (node, event, callback) => {
    node.forEach(element => element.addEventListener(event, callback));
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

    
    //Add class that displays modal
    modal.classList.add('is-open');

    //Add class that prevents body scroll
    document.documentElement.classList.add('js-modal-open');
    
  })





  //Dismiss modal
  toggle(selector.DATA_DISMISS, 'click', function (_params) {
    
    //If modal is open
    if(this.closest('.js-modal').classList.contains('is-open')) {

      //Remove class that displays modal
      this.closest('.js-modal').classList.remove('is-open') 

      //Remove class that prevents body scroll
      document.documentElement.classList.remove('js-modal-open');
    }
    
  })





  //Dismiss modal by outside click
  toggle(selector.MODAL, 'click', function (event) {

    //If static option enabled do not close modal by clicking outside
    if (this.hasAttribute('data-backdrop')) {
      if (this.dataset.backdrop === 'static') {
        return;
      } 
    }
    
    //If it can't find class name in ancestry the click is outside
    const isOutside = !event.target.closest('.js-modalContent');
    
    if(isOutside) {
      //If modal is open
      if(event.target.closest('.js-modal').classList.contains('is-open')) {

        //Remove class that displays modal
        event.target.closest('.js-modal').classList.remove('is-open') 

        //Remove class that prevents body scroll
        document.documentElement.classList.remove('js-modal-open');
      }
    }

  })
  



  





};



// Initialize modal functionality
simplusModal();










