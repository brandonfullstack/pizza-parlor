// Business Logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.calculateCost = function () {
  const basePrice = 10;
  const toppingPrice = 3;
  const sizePrice = {
    "small": 0,
    "medium": 5,
    "large": 7,
    "huge": 9,
    "massive": 12
  };

  let cost = basePrice + (this.toppings.length * toppingPrice);
  cost += sizePrice[this.size];

  return cost;
};

// UI Logic

window.addEventListener("load", function () {
  const form = document.getElementById("theForm");
  form.addEventListener("submit", displayToppings)
})

function displayToppings(event) {
  event.preventDefault();
  const selectedToppings = []

  const pizzaSize = document.getElementById("pizzaSize").value;
  const toppingsList = document.querySelectorAll("input[name='toppings']:checked")
  toppingsList.forEach(function (topping) {
    selectedToppings.push(topping.value)
  })
  myPizza = new Pizza(selectedToppings, pizzaSize);
  document.getElementById("result").innerText = `You selected a ${pizzaSize} pizza with: ${selectedToppings}`
  document.getElementById("cost").innerText = `$ ${myPizza.calculateCost()}`
}