
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










/**
 * 
 * Utm Tracking to cookie and form (VS CODE COPILOT PROJECT) FOR /form test PAGE
 */

function parseURL() {
  // Define the setCookie function
  function setCookie(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }

  // Get the current URL
  var url = window.location.href;

  // Check if the URL contains query parameters
  if (url.indexOf('?') !== -1) {
    // Get the query string from the URL
    var queryString = url.split('?')[1];

    // Split the query string into an array of key-value pairs
    var params = queryString.split('&');

    // Loop through the array of key-value pairs
    for (var i = 0; i < params.length; i++) {
      // Get the current key-value pair
      var param = params[i].split('=');

      // Get the name of the parameter
      var name = param[0];

      // Get the value of the parameter
      var value = param[1];

      // Check if the parameter is a UTM parameter
      if (name.indexOf('utm_') === 0) {
        // Set the parameter as a cookie
        setCookie(name, value, 30);
      }
    }
  }
}

// Fire the parseURL() function
parseURL();
  
  
  function addUTMParameters() {
  // Define the getCookie function
  function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  // Get the values of the utm_campaign and utm_source cookies
  var utmCampaign = getCookie('utm_campaign');
  var utmSource = getCookie('utm_source');
  var utmMedium = getCookie('utm_medium');
  var utmTerm = getCookie('utm_term');
  var utmContent = getCookie('utm_content');

  // Check if the utm_campaign cookie exists and has a value
  if (utmCampaign) {
    // Get the form field with the ID "text-a29010ba-1722-4a7b-a452-a6c17e26209b-field"
    var field1 = document.getElementById('text-a29010ba-1722-4a7b-a452-a6c17e26209b-field');

    // Check if the form field exists
    if (field1) {
      // Set the value of the form field to the value of the utm_campaign cookie
      field1.value = utmCampaign;
    }
  }

  // Check if the utm_source cookie exists and has a value
  if (utmSource) {
    // Get the form field with the ID "text-5c191650-57fa-4763-9091-688f315e9dfe-field"
    var field2 = document.getElementById('text-5c191650-57fa-4763-9091-688f315e9dfe-field');

    // Check if the form field exists
    if (field2) {
      // Set the value of the form field to the value of the utm_source cookie
      field2.value = utmSource;
    }
  }

    if (utmMedium) {
    // Get the form field with the ID "text-5c191650-57fa-4763-9091-688f315e9dfe-field"
    var field2 = document.getElementById('text-5ea0536a-3ecd-45e2-b783-9c357dc9c597-field');

    // Check if the form field exists
    if (field2) {
      // Set the value of the form field to the value of the utm_source cookie
      field2.value = utmMedium;
    }
  }


    if (utmTerm) {
    // Get the form field with the ID "text-5c191650-57fa-4763-9091-688f315e9dfe-field"
    var field2 = document.getElementById('text-55dc23e4-3625-432e-bd32-bd2f9c3dc9ee-field');

    // Check if the form field exists
    if (field2) {
      // Set the value of the form field to the value of the utm_source cookie
      field2.value = utmTerm;
    }
  }

    if (utmContent) {
    // Get the form field with the ID "text-5c191650-57fa-4763-9091-688f315e9dfe-field"
    var field2 = document.getElementById('text-a8cbfd85-9631-445b-b4d0-e42174d914d8-field');

    // Check if the form field exists
    if (field2) {
      // Set the value of the form field to the value of the utm_source cookie
      field2.value = utmContent;
    }
  }
}



//jquery domready function
$( document ).ready(function() {    
  // Fire the addUTMParameters() function
  addUTMParameters();
}); 













