function Item(name, price, quantity, description, isPrime = false) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    this.prime = isPrime;
    this.itemId = Item.idCounter();
    this.reviews = [];
}

Item.idCounter = (function() {
    let count = 0;
    return function() {
        count += 1;
        return count;
    }
})()

Item.prototype.toString = function() {
    return this.name;
}

function Cart(){
    this.items = []
}

Cart.prototype.numOfItems = function() {
    return this.items.length;
}

Cart.prototype.getTotal = function() {
    return this.items.reduce((total, item) => total + item.price, 0);
}

function Account(name, email, paymentMethod, isPrime) {
    this.name = name;
    this.email = email;
    this.paymentMethod = paymentMethod;
    this.isPrime = isPrime;
    this.cart = new Cart();
    this.reviews = [];
    this.saveForLater = [];
    this.orders = [];
}

Account.prototype.addItem = function(item, quantity) {
    for (let i = 1; i <= quantity; i += 1) {
        this.cart.items.push(item)
    }

    item.quantity -= quantity;
    return `${item} added.`
}

Account.prototype.deleteItem = function(item) {
    let itemsArr = this.cart.items;
    itemsArr.splice(itemsArr.indexOf(item), 1);
    return `${item} deleted`;
}

function Review(rating, comment, picture) {
    this.rating = rating;
    this.comment = comment;
    this.date = new Date();
    this.picture = picture;
}

let markers = new Item('Markers', 9.99, 50, 'Best markers in the world')
let petersAccount = new Account('peter', 'peter@gmail.com', 'Credit Card', true)
