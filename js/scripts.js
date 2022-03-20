//Business Logic
function Order(size, toppings, crust, total){
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
  this.total = total
}

//User Interface Logic
$(document).ready(function(){

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

    //Set the selected order details in the order summary
    $("#pizzaOrderSize").html(pizzaSize);
    $("#pizzaOrderToppings").html(pizzaToppings);
    $("#pizzaOrderCrust").html(pizzaCrust);
    $("#totalOrderCost").html(total);

    //On Clcking the Add Quantity Button
    $("#btn-add-quantity").click(function() {
      let pizzaSize = $("#size option:selected").text();
      let pizzaToppings = $("#toppings option:selected").text();
      let pizzaCrust = $("#crust option:selected").text();

      let pizzaSizePrize = parseInt($("#size option:selected").val());
      let pizzaToppingsPrize = parseInt($("#toppings option:selected").val());
      let pizzaCrustPrize = parseInt($("#crust option:selected").val());
      let total = pizzaSizePrize + pizzaToppingsPrize + pizzaCrustPrize;

      var newPizzaOrder = new Order(pizzaSize, pizzaToppings, pizzaCrust, total);

      var newOrderSummary = '<tr>' + '<td id="pizzaOrderSize">' + newPizzaOrder.size + '</td><td id="pizzaOrderToppings">' + newPizzaOrder.toppings + '</td><td id="pizzaOrderCrust">' + newPizzaOrder.crust + '</td><td id="totalOrderCost">' + newPizzaOrder.total + '</td></tr>'

      $("#pizzaOrders").append(newOrderSummary);  
    });

    $("#btn-order").hide();
    
  });

});