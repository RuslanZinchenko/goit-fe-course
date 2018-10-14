'use strict'

class Hamburger {
    constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
    }

    addTopping(topping) {
        if (!this._toppings.includes(topping)) {
            this._toppings.push(topping);
        }
    }

    removeTopping(topping) {
        if (this._toppings.includes(topping)) {
            this._toppings.pop(topping);
        }
    }

    get toppings () {
        return this._toppings;
    }

    get size () {
        return this._size;
    }

    get stuffing () {
        return this._stuffing;
    }

    get price () {
      let priceBySize = Hamburger.SIZES[this._size].price;
      let priceByStuff = Hamburger.STUFFINGS[this._stuffing].price;
      let priceByTopping = this._toppings.map((str) => Hamburger.TOPPINGS[str].price).reduce((acc, item) => acc + item, 0);
      this._price = priceBySize + priceByStuff + priceByTopping;
      return this._price 
    }

    get calories () {
        let calBySize = Hamburger.SIZES[this._size].calories;
        let calByStuff = Hamburger.STUFFINGS[this._stuffing].calories;
        let calByTopping = this._toppings.map((str) => Hamburger.TOPPINGS[str].calories).reduce((acc, item) => acc + item, 0);
        this._calories = calBySize + calByStuff + calByTopping;
        return this._calories;
    }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_MEDIUM = 'SIZE_MEDIUM';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },

  [Hamburger.SIZE_MEDIUM]: {
      price: 40,
      calories: 65,
  },

  [Hamburger.SIZE_LARGE]: {
      price: 50,
      calories: 80,
  }
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT'

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  
  [Hamburger.STUFFING_SALAD]: {
      price: 20,
      calories: 10,
  },

  [Hamburger.STUFFING_MEAT]: {
      price: 45,
      calories: 40,
  }
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },

  [Hamburger.TOPPING_SAUCE]: {
      price: 15,
      calories: 5,
  }
}


const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
hamburger.addTopping(Hamburger.TOPPING_SPICE);
console.log('Calories: ', hamburger.calories)
console.log('Price: ', hamburger.price)
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log('Price with sauce: ', hamburger.price);
console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE);
hamburger.removeTopping(Hamburger.TOPPING_SPICE);
console.log("Hamburger has %d toppings", hamburger.toppings.length);




// const Cheese = new Hamburger(5, 'meat');
// console.log(Cheese)

// Cheese.addTopping(4);
// console.log(Cheese);
// Cheese.removeTopping(4);
// console.log(Cheese);

// console.log(Cheese.toppings);
// console.log(Cheese.size);
// console.log(Cheese.stuffing);