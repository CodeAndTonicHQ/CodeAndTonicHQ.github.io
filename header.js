
console.log("! dev");


/**
 * 
 * Stripe Payment Links as E-commerce Product buttons
 */

//STRIPE PAYMENT LINKS FOR SQUARESPACE
function purchaseButtonStripeCheck(href, text, url) {
  //check if the url has the string
  if(window.location.href.indexOf(url) > -1) {
      $(document).ready(function() {
          $('.sqs-add-to-cart-button-wrapper').append('<a href="' + href + '" class="purchase-stripe sqs-add-to-cart-button sqs-suppress-edit-mode sqs-button-element--primary" role="button" tabindex="0" data-dynamic-strings="" data-collection-id="5e6f57fbe095af7f341825c7" data-item-id="6320b49d78d404189edf0c3d" data-product-type="3" data-use-custom-label="false" data-original-label="Add To Cart" id="yui_3_17_2_1_1671384804027_265"><div class="sqs-add-to-cart-button-inner">' + text + '</div></a>');
          //add code to hide sqs-add-to-cart-button  without the class purchase-stripe
          $('.sqs-add-to-cart-button').not('.purchase-stripe').hide();
      });
  }
}


//STRIPE PAYMENT LINKS FOR ACUITY REDIRECTS
purchaseButtonStripeCheck('https://buy.stripe.com/7sI7tl3uOakhbJKaFI', 'Buy via Stripe', 'acuity-scheduling-redirect');
















