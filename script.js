const prices = {
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
  constructor(size, ingredients, base, sweetener) {
    this.size = size;
    this.ingredients = ingredients;
    this.base = base;
    this.sweetener = sweetener;
  }


  getTotalPrice() {
    let total = 0;
    total += prices.size[this.size];
    total += prices.base[this.base];
    total += prices.sweetener[this.sweetener];
    this.ingredients.forEach(ingredient => {
      total += prices.ingredients[ingredient];
    });
    return total.toFixed(2);
  }


  getDescription() {
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

