"use strict";

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
};

function Cashier(name, productDatabase) {
    this.name = name;
    this.productDatabase = products;
    this.customerMoney = 0;
    this.getCustomerMoney = function(value) {
        this.customerMoney = value;
        return this.customerMoney;
    };

    this.countTotalPrice = function(order) {
        const orderArr = Object.entries(order);
        const priceArr = Object.entries(this.productDatabase);
    
        this.totalPrice = 0;

        for (const val of orderArr) {
        const productOrderName = val[0];
        const productOrderNumber = val[1];
    
            for (const item of priceArr) {
            const productPriceName = item[0];
            const productPriceNumber = item[1];

                if (productOrderName === productPriceName) {
                this.totalPrice += productOrderNumber * productPriceNumber;
                }
            }
        }
    return this.totalPrice ;
    };

    this.countChange = function (totalPrice) {
        if (this.customerMoney < this.totalPrice) {
        return null;
        } const change = this.customerMoney - this.totalPrice ;
        return change;
        }

            this.onSuccess = function (change) {
            return `Спасибо за покупку, ваша сдача ${change}!`;
            }
            this.onError = function () {
            return 'Очень жаль, вам не хватает денег на покупки';   
            }
            this.reset = function () {
            return this.customerMoney = 0;
            }
}

/* Пример использования */
const mango = new Cashier('Mango', products);
 console.log(mango.name); // Mango
  console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
   console.log(mango.customerMoney); // 0
    const totalPrice = mango.countTotalPrice(order);
     console.log(totalPrice); // 110
      mango.getCustomerMoney(300);
       console.log(mango.customerMoney); // 300
        const change = mango.countChange();
         console.log(change); // 190

if(change !== null) {
    console.log(mango.onSuccess(change)); // Спасибо за покупку, ваша сдача 190
} else {
    console.log(mango.onError()); // Очень жаль, вам не хватает денег на покупки
}

mango.reset();
console.log(mango.customerMoney); // 0