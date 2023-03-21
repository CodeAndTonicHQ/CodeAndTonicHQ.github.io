  //Debugger function that console logs the data if acuityDebug = true
  function acuityDebugConsoleLog(what){
    if(acuityDebug ){
      console.log(what);
    }
  }

    //CHECK FOR GTAG - MUST HAVE FOR THINGS TO WORK
    function acuityCheckGtag(){
      if(acuityToGA4Event || acuityToGoogleAds){
      if (typeof gtag === 'undefined') {
        acuityDebugConsoleLog("🚨🚨🚨🚨🚨🚨 gtag is not defined, please add the Google Analytics 4 tag OR GOOGLE ADS gtag to your page");
      } else {
        acuityDebugConsoleLog("✅ 👍 gtag is defined, you're good to go with Acuity to GA4 event & Google Ads conversion");
      }
      }
    }
  
    // run the gtag check function on dom ready vanilla js
    document.addEventListener("DOMContentLoaded", function(event) {
      acuityCheckGtag();
    });



  var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
  var eventer = window[eventMethod];
  var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
  
  // Listen to message from child window
  eventer(messageEvent,function(e) {
      var key = e.message ? "message" : "data";
      var data = e[key];
      //run function//

      acuityDebugConsoleLog("e:");
      acuityDebugConsoleLog(e);
      acuityDebugConsoleLog("data:");
      acuityDebugConsoleLog(data);
      acuityDebugConsoleLog(e.type);
      acuityDebugConsoleLog("data.type:" + data.Type);
      acuityDebugConsoleLog("data.email:" + data.Email);
      acuityDebugConsoleLog("appointment type is: ");
      acuityDebugConsoleLog(data.AppointmentType);
      acuityDebugConsoleLog("📅 calendarID: ");
      acuityDebugConsoleLog(data.Calendar);
      acuityDebugConsoleLog("ID: ");
      acuityDebugConsoleLog(data.ID);
      acuityDebugConsoleLog("price for booking (data.Price) is" + data.Price);
  
  
  if(data.acuityconversion == 'success'){
    acuityDebugConsoleLog("✅✅✅ ACUITY LISTENER TAG HEARD AN APPOINTMENT BOOKED ✅✅✅");
      
      /*
      // ACUITY TO GOOGLE TAG MANAGER DATA LAYER  (non e-commerce version )
        window.dataLayer.push({
          'event': data.Calendar,
          'event': 'acuity-success-any-appointment-type',
          'conversionPrice': data.Price,
          'acuityCalendar': data.Calendar,
          'acuityAppointmentTypeName': data.AppointmentType,
          'acuityType': data.Type,
          'acuityEmail': data.Email
        });
        */

    


    // ACUITY TO GOOGLE TAG MANAGER DATA LAYER  (non e-commerce version )
    try {
      if(acuityToGTMDatalayer == true){
      dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
      dataLayer.push({
        event: "purchase",
        'conversionPrice': data.Price,
        'acuityCalendar': data.Calendar,
        'acuityAppointmentTypeName': data.AppointmentType,
        'acuityType': data.Type,
        'acuityEmail': data.Email,
        ecommerce: {
            transaction_id: data.ID,
            affiliation: data.Calendar,
            value: data.Price,
            tax: 0,
            shipping: 0,
            currency: acuityCurrency,
            coupon: "",
            items: [
              {
              item_id: data.AppointmentType.replace(/\s+/g, '-').toLowerCase(),
              item_name: data.AppointmentType,
              affiliation: data.Calendar,
              item_brand: acuityBrandName,
              item_category: "Acuity Booking",
              //location_id: "",
              price: data.Price,
              quantity: 1
            }]
        }
      });
    } // end if acuityToGTMDatalayer
    } catch (err) {
      // error handling
      acuityDebugConsoleLog("error is: " + err);
    }


    
  
    // ACUITY TO GOOGLE ANALYTICS 4 E-COMMERCE EVENT
    try {
      if(acuityToGA4Event == true){
        acuityDebugConsoleLog("👋 Sending Acuity conversion GA4 event");
        // make a GA4 purchase version based on the the Google Tag Manager data layer  version above
        gtag("event", "purchase", {
          "transaction_id": data.ID,
          "affiliation": data.Calendar,
          "value": data.Price,
          "tax": 0,
          "shipping": 0,
          "currency": acuityCurrency,
          "coupon": "",
          "items": [
            {
              "item_id": data.AppointmentType.replace(/\s+/g, '-').toLowerCase(),
              "item_name": data.AppointmentType,
              "affiliation": data.Calendar,
              "item_brand": acuityBrandName,
              "item_category": "Acuity Booking",
              "price": data.Price,
              "quantity": 1
            }
          ]
        });
  
  
      //make new vrersion of gtag("event", "purchase", with callback console log
     
  
      } // end if acuityToGA4Event
      
    } catch (err) {
      // error handling
      acuityDebugConsoleLog("GA4 acuity event didin't work. Error is: " + err);
    }





/*
    // ACUITY TO GOOGLE ADS CONVERSION EVENT
    if(acuityToGoogleAds){
      acuityDebugConsoleLog("👋 Sending Acuity conversion Google Ads event");
      gtag('event', 'conversion', {
        'send_to': GoogleAdsIDAndLabel,
        'value': data.Price,
        'currency': acuityCurrency,
        'transaction_id': data.ID
      });
      */

      try {

         // ACUITY TO GOOGLE ADS CONVERSION EVENT
    if(acuityToGoogleAds == true){
      acuityDebugConsoleLog("👋 Google Ads conversion event sending to: " + GoogleAdsIDAndLabel + " with price: " + data.Price + " and transaction ID: " + data.ID);
      gtag('event', 'conversion', {
        'send_to': GoogleAdsIDAndLabel,
        'value': data.Price,
        'currency': acuityCurrency,
        'transaction_id': data.ID
      });
    }
      
      } catch (err) {
        // error handling
        acuityDebugConsoleLog("Google Ads Conversion didin't work. Error is: " + err);
      }
  



// make a new version with callback 
/*
      gtag('event', 'conversion', {
        'send_to': GoogleAdsIDAndLabel,
        'value': data.Price,
        'currency': acuityCurrency,
        'transaction_id': data.ID
      }, function() {
        acuityDebugConsoleLog("✅ CALLBACK Google Ads conversion event fired");
      });

    */


    // ACUITY TO META PIXEL - PURCHASE EVENT WITH PRICE
    try {
      if(acuityToMetaPixelPurchase == true){
        acuityDebugConsoleLog("👋 Sending Acuity conversion Meta Pixel PURCHASE event");
        fbq('track', 'Purchase', {currency: acuityCurrency, value: data.Price });
      } // end if acuityToMetaPixelPurchase
      
    } catch (err) {
      // error handling
      acuityDebugConsoleLog("Facebook pixel purchase didin't work. Error is: " + err);
    }


    // ACUITY TO META PIXEL - SCHEDULE EVENT
    try {
      if(acuityToMetaPixelSchedule == true ){
        acuityDebugConsoleLog("👋 Sending Acuity conversion Meta Pixel SCHEDULE event");
        //fbq('track', 'Schedule', {currency: acuityCurrency, value: data.Price }); // CAN we add a value here?
        fbq('track', 'Schedule');
      } // end if acuityToMetaPixelSchedule
    } catch (err) {
      // error handling
      acuityDebugConsoleLog("Facebook pixel schedule didin't work. Error is: " + err);
    }


  } // end if data.acuityconversion == 'success'
    
},false); // end addEventListener



/*


gtag("event", "purchase", {
        "transaction_id": data.ID,
        "affiliation": data.Calendar,
        "value": data.Price,
        "tax": 0,
        "shipping": 0,
        "currency": acuityCurrency,
        "coupon": "",
        "items": [
          {
            "item_id": data.AppointmentType.replace(/\s+/g, '-').toLowerCase(),
            "item_name": data.AppointmentType,
            "affiliation": data.Calendar,
            "item_brand": acuityBrandName,
            "item_category": "Acuity Booking",
            "price": data.Price,
            "quantity": 1
          }
        ]
      });

add dymmy values to the gtag("event", "purchase", { 

gtag("event", "purchase", {
        "transaction_id": "123456789",
        "affiliation": "acuity-calendar",
        "value": 100,
        "tax": 0,
        "shipping": 0,
        "currency": "USD",
        "coupon": "",
        "items": [
          {
            "item_id": "appointment-type",
            "item_name": "appointment-type",
            "affiliation": "acuity-calendar",
            "item_brand": "acuity-brand",
            "item_category": "Acuity Booking",
            "price": 100,
            "quantity": 1
          }
        ]
      });
      */

      // make a new dummy version of the gtag("event", "purchase", { with callback console log
   /* gtag("event", "purchase", {
        "transaction_id": "123456789",
        "affiliation": "acuity-calendar",
        "value": 100,
        "tax": 0,
        "shipping": 0,
        "currency": "USD",
        "coupon": "",
        "items": [
          {
            "item_id": "appointment-type",
            "item_name": "appointment-type",
            "affiliation": "acuity-calendar",

            "item_brand": "acuity-brand",
            "item_category": "Acuity Booking",
            "price": 100,
            "quantity": 1
          }
        ]
      }, function() {
        acuityDebugConsoleLog("✅ CALLBACK - Google Analytics 4 conversion event fired");
      }
      );
      */


      //send simple GTAG test event to GA4
      /*
      gtag("event", "test", {
        "event_category": "test",
        "event_label": "test",
        "value": 100
      });
      */
     
