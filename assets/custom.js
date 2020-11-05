/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */
$(document).ready(function(){
  console.log("All charged.")
  
  
  if(window.location.href.includes('products')){
    console.log("Shipping product-page.");
    
    var shipping_response = $('#wrapper-response');
    $('#shipping-form').on('submit' , function(e){
      e.preventDefault();
      var data    = {
        "rate": {
          "destination": {
            "postal_code": "3000",
          },
          "items": [{
            "quantity": 1,
            "grams": 6333,
            "price": 20919,
          }],
        }
      };
      data.rate.destination.postal_code = $('#zip_code_shipping').val();
      data.rate.items[0].price = $('#price_shipping').val();
      data.rate.items[0].quantity = $('select[name="quantity"]').val();
      data.rate.items[0].grams = $('#grams_shipping').val();
      data = JSON.stringify(data);
      $.ajax({
        url: $(this).attr('action'),
        dataType: 'json',
        contentType: "application/json; charset=utf-8;",
        data: { "rates" : data },
        beforeSend: function(){
          console.log(data);
          $('.get-rates').val('Calculando envio...');
          shipping_response.html('');
        },
        success: function(data){
          if(data.rates.length > 1 ) {
            var service_name = '';
            var price = 0;
            var rates = '<p><strong>Envíos Disponibles:</strong></p><ul class="list-shipping">';
            for (let index = 0; index < data.rates.length; index++) {
              if( index == 0 ){
                service_name = 'Andreani envío a domicilio';
              }
              if( index == 1 ){
                service_name = 'Retiro gratis en sucursales Petenatti';
              }
              if( index == 2 ){
                service_name = 'Retiro gratis en sucursales Conte';
              }
              price = (data.rates[index].total_price / 100 );
              //price =  price * 1.21;
              rates += '<li>'+ service_name + ': $' + price.toFixed(2) + '</li>';
            }
            rates += '</ul>';
            rates += '<p><a class="be-magenta" href="/pages/sucursales" target="_blank"><strong>¡Conocé nuestras sucursales acá!</strong></a><p>';
            shipping_response.html(rates);
            shipping_response.style.display = "block";
          }else{
            shipping_response.style.display = "block";
            shipping_response.text('Lamentablemente no hacemos envíos a esa localidad.')
          }
          
          $('.get-rates').val('Calcular envío');
        }
      })
    })
  };
  
  if(window.location.href.includes('cart')){
    console.log("Shipping cart-page.");
    
    $(document).on('click' , '.get-rates ', function(e){
      
      console.log("clickado");
      e.preventDefault();
      var data    = {
        "rate": {
          "destination": {
            "postal_code": "3000",
          },
          "items": [{
            "quantity": 1,
            "grams": 6333,
            "price": 20919,
          }],
        }
      };
      data.rate.destination.postal_code = $('#shipping-zip').val();
      data.rate.items[0].price = $('#price_shipping').val();
      data.rate.items[0].quantity = 1;
      data.rate.items[0].grams = $('#grams_shipping').val();
      data = JSON.stringify(data);
      
      $.ajax({
        url: $(this).attr('act'),
        dataType: 'json',
        contentType: "application/json; charset=utf-8;",
        data: { "rates" : data },
        beforeSend: function(){
          $('#response_shipping').html('');
          
          console.log(data);
          $('.get-rates').val('Calculando envio...');
        },
        success: function(data){
          console.log(data);
          
          if(data.rates.length > 1 ) {
            var service_name = '';
            var price = 0;
            var rates = '<p><strong>Envíos Disponibles:</strong></p><ul class="list-shipping">';
            for (let index = 0; index < data.rates.length; index++) {
              if( index == 0 ){
                service_name = 'Andreani envío a domicilio';
              }
              if( index == 1 ){
                service_name = 'Retiro gratis en sucursales Petenatti';
              }
              if( index == 2 ){
                service_name = 'Retiro gratis en sucursales Conte';
              }
              price = (data.rates[index].total_price / 100 );
              //price =  price * 1.21;
              rates += '<li>'+ service_name + ': $' + price.toFixed(2) + '</li>';
            }
            rates += '</ul>';
            rates += '<p><a class="be-magenta" href="/pages/sucursales" target="_blank"><strong>¡Conocé nuestras sucursales acá!</strong></a><p>';
            
            
            $('#response_shipping').html(rates);
            
          }else{
            
            $('#response_shipping').text('Lamentablemente no hacemos envíos a esa localidad.')
          }
          
          $('.get-rates').val('Estimación');
        }
      })
      
    })
  };
  
  
  $('.product-list__column product-list__column--highlight').mouseover(function(){
    console.log("Mouse encima de product")
    $('.product-list__column product-list__column--highlight').css('border', '1px solid #ce1d76;')
    $('.product-list__column product-list__column--highlight').css('box-shadow', '2px 2px 15px #ADADAD;')
  })
  document.querySelectorAll('.button_featured_innovate').forEach(function(element){
    if(element.getAttribute('disabled') !== null){
      element.style.border = '0px';
    }
  })

  $('.product-item__calculator-group--payment').click(function(){
    $('#calculator-payment').addClass('active');
    $('.overlay').removeClass('hidden');
  });

  $('#calculator-payment .close').click(function(){
    $('#calculator-payment').removeClass('active');
    $('.overlay').addClass('hidden');
  });


  $('.payment__button--provider button').click(function(){
    $('.payment__content--provider').toggleClass('d-none');
  });
  $('.payment__button--dues button').click(function(){
    $('.payment__content--dues').toggleClass('d-none');
  });

  if ( window.innerWidth <= 425 ) {
    
    $(document).on('click', '#sticky-button', function(e){
    	$('button[data-action="add-to-cart"]').trigger('click');
    });
    
    $("#shopify-section-1581618065795").insertBefore( $("#shopify-section-1542984842027") )
    
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if(scroll >= 930) {
        $(".template-product #sticky-button").removeClass("hidden");
      } else {
        $(".template-product #sticky-button").addClass("hidden");
      }
    });
  }

})