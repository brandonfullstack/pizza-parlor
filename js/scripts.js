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
    "large": 10,
    "huge": 20,
    "massive": 30
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

  if (selectedToppings.length === 0 || selectedToppings.length === NaN) {
    document.getElementById("result").innerText = `You selected a ${pizzaSize} pizza with no additional toppings for $${myPizza.calculateCost()}.`;
  } else if (selectedToppings.length === 2) {
    document.getElementById("result").innerText = `You selected a ${pizzaSize} pizza with ${selectedToppings[0] + " and " + selectedToppings[1]} for $${myPizza.calculateCost()}.`
  } else if (selectedToppings.length >= 3) {
    document.getElementById("result").innerText = `You selected a ${pizzaSize} pizza with ${selectedToppings.join(', ').slice(0, -1) + ", and " + selectedToppings.join(', ').slice(-1)} for $${myPizza.calculateCost()}.`
  } else
    document.getElementById("result").innerText = `You selected a ${pizzaSize} pizza with ${selectedToppings} for $${myPizza.calculateCost()}.`
}