let totalAmount = 0;
let cartArray = [];
let items = [
  {
    id: "1",
    name: "Logitech 920-009415 MX Keys Advanced Illuminated Wireless Keyboard",
    arrival: "Thursday, Feb. 11",
    price: 360,
    image: "keyboard.jpg" // Add the image URL here
  },
  // Add more items here
];

// Function to add an item to the cart
function addItemToCart(item) {
  cartArray.push(item);
  totalAmount += item.price;
  updateCart(); // Call a function to update the cart display
}

// Function to update the cart display
function updateCart() {
  // Code to update the cart UI with the current cartArray and totalAmount
}

// Example: Add an event listener to a button that adds an item to the cart
const addButton = document.getElementById("add-button"); // Replace "add-button" with the actual button ID in your HTML
addButton.addEventListener("click", function () {
  addItemToCart(items[0]); // Add the first item to the cart when the button is clicked
});
