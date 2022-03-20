//Business Logic
function Order(size, toppings, crust, total){
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.total = total
}

//User Interface Logic
$(document).ready(function(){
  //Reset Select Input Types to Default After Completing an Order
  function resetDefault(){
    pizzaSize = $("#size option:selected").text("Select Size");
    pizzaToppings = $("#toppings option:selected").text("Select Toppings");
    pizzaCrust = $("#crust option:selected").text("Select Crust");
  }

  //On Clicking the Order Button
  $("#btn-order").click(function(){
    //Get the Selected Pizza Size,Toppings and Crust
    let pizzaSize = $("#size option:selected").text();
    let pizzaToppings = $("#toppings option:selected").text();
    let pizzaCrust = $("#crust option:selected").text();

    //Get the Pizza Prices
    let pizzaSizePrize = parseInt($("#size option:selected").val());
    let pizzaToppingsPrize = parseInt($("#toppings option:selected").val());
    let pizzaCrustPrize = parseInt($("#crust option:selected").val());
    let total = pizzaSizePrize + pizzaToppingsPrize + pizzaCrustPrize;
    let grandTotal = total;

    //Set the selected order details in the order summary
    $("#pizzaOrderSize").html(pizzaSize);
    $("#pizzaOrderToppings").html(pizzaToppings);
    $("#pizzaOrderCrust").html(pizzaCrust);
    $("#totalOrderCost").html(total);

    console.log(grandTotal);

    //On Clcking the Add Quantity Button
    $("#btn-add-quantity").click(function() {
      let pizzaSize = $("#size option:selected").text();
      let pizzaToppings = $("#toppings option:selected").text();
      let pizzaCrust = $("#crust option:selected").text();

      let pizzaSizePrize = parseInt($("#size option:selected").val());
      let pizzaToppingsPrize = parseInt($("#toppings option:selected").val());
      let pizzaCrustPrize = parseInt($("#crust option:selected").val());
      let total = pizzaSizePrize + pizzaToppingsPrize + pizzaCrustPrize;
      grandTotal = grandTotal + total;

      var newPizzaOrder = new Order(pizzaSize, pizzaToppings, pizzaCrust, total);

      var newOrderSummary = '<tr>' + '<td id="pizzaOrderSize">' + newPizzaOrder.size + '</td><td id="pizzaOrderToppings">' + newPizzaOrder.toppings + '</td><td id="pizzaOrderCrust">' + newPizzaOrder.crust + '</td><td id="totalOrderCost">' + newPizzaOrder.total + '</td></tr>'

      $("#pizzaOrders").append(newOrderSummary);  

      console.log(grandTotal);
    });

    //On Clcking the Checkout Button
    $(".btn-checkout").click(function(){
      $(".checkout-info").show();
      $(".grandTotal").html("Kshs " + grandTotal);
      $(".location-info").hide();
      $(".response").hide();
    });

    //On Clicking the Yes Button
    $(".yes-btn").click(function(){
      grandTotal = grandTotal + 100;
      $(".grandTotal").html("now Kshs " + grandTotal);

      $(".delivery-info").hide();
      $(".location-info").show();  
    });
  
    //On Clicking the Complete Order Button
    $(".complete-btn").click(function(){
      let location = $(".location").val();
      $(".inputLocation").html(location);

      $(".location-info").hide();  
      $(".response").show();
      resetDefault();
    });

    $("#btn-order").hide();
    
  });

});