// Business Logic



// UI Logic

window.addEventListener("load", function(){
  const form = document.getElementById("theForm");
  form.addEventListener("submit", displayToppings)
})

function displayToppings(event){
  event.preventDefault();
  const selectedToppings = []

  const toppingsList = document.querySelectorAll("input[name='toppings']:checked")
  toppingsList.forEach(function(topping){
    selectedToppings.push(topping.value)
  })

  document.getElementById("result").innerText =`You selected these toppings: ${selectedToppings}`
}