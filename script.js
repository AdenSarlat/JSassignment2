const prices = { // pricign data for all smoothie choices
  size: {
    Small: 5.00,
    Medium: 5.59,
    Large: 7.90
  },
  ingredients: {
    Banana: 0.50,
    Strawberry: 0.75,
    Blueberry: 0.45,
    Mango: 1.00,
    Rasperry: 0.90,
    Pineapple: 0.90,
    Coconut: 0.20
  },
  base: {
    Water: 0.00,
    "Almond Milk": 0.50,
    Milk: 0.70,
    Yogurt: 0.95
  },
  sweetener: {
    None: 0.00,
    Honey: 0.30,
    "Sugar Cane": 0.25,
    Sugar: 0.20
  }
};
class Smoothie {
  constructor(size, ingredients, base, sweetener) { // smoothie class for custom order
    this.size = size;
    this.ingredients = ingredients;
    this.base = base;
    this.sweetener = sweetener;
  }


  getTotalPrice() { // finds the total price on options
    let total = 0;
    total += prices.size[this.size];
    total += prices.base[this.base];
    total += prices.sweetener[this.sweetener];
    this.ingredients.forEach(ingredient => {
      total += prices.ingredients[ingredient];
    });
    return total.toFixed(2); // format it to 2 decimals for money
  }


  getDescription() { //creating the description of your selected order 
    return `
      <h2>Your Smoothie</h2>
      <p><strong>Size:</strong> ${this.size}</p>
      <p><strong>Ingredients:</strong> ${this.ingredients.join(', ') || 'None'}</p>
      <p><strong>Base:</strong> ${this.base}</p>
      <p><strong>Sweetener:</strong> ${this.sweetener}</p>
      <p><strong>Total Price:</strong> $${this.getTotalPrice()}</p>
    `;
  }
}
document.getElementById('smoothieForm').addEventListener('submit', function (e) { // Event listener for form submission
  e.preventDefault();


  const size = document.getElementById('size').value; // finding all the selected values from the form 
  const base = document.getElementById('base').value;
  const sweetener = document.getElementById('sweetener').value;

    const ingredients = Array.from(document.querySelectorAll('input[name="ingredients"]:checked')).map(i => i.value);


  const smoothie = new Smoothie(size, ingredients, base, sweetener); // a new smoothie obj with your selections
  document.getElementById('output').innerHTML = smoothie.getDescription();


  //showing the photo next to the desc
document.getElementById('smoothieImage').innerHTML = `   
  <img src="mycartoonsmothi.png" alt="smoothie guy" />  <!-- Smoothie image from PNGTree: https://pngtree.com/freepng/cartoon-smoothie-ai-generative_14600711.html -->
`;


});


