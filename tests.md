Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: Pizza { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "It should calculate the cost of a pizza correctly"
Code: const myPizza = new Pizza(["anchovies", "pineapple"], "medium");
Expected Output: myPizza.calculateCost() = 16