//Business Logic


//User Interface Logic
$(document).ready(function(){

  //On Clicking the Order Button
  $("#btn-order").click(function(){
    //Get the Selected Pizza Size,Topping and Crust
    let pizzaSize = $("#size option:selected").text();
    let pizzaToppings = $("#toppings option:selected").text();
    let pizzaCrust = $("#crust option:selected").text();

    console.log(pizzaSize);
    console.log(pizzaToppings);
    console.log(pizzaCrust);
  });

});