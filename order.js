// Order functionality

class Order {
    constructor(customerName, items) {
        this.customerName = customerName;
        this.items = items;
        this.orderDate = new Date();
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    generateReceipt() {
        const total = this.calculateTotal();
        return `Receipt for ${this.customerName}\nItems: ${this.items.map(item => item.name).join(', ')}\nTotal: $${total.toFixed(2)}\nDate: ${this.orderDate.toUTCString()}`;
    }
}  

// Example usage
// const order = new Order('John Doe', [{ name: 'Cake', price: 25.00 }, { name: 'Coffee', price: 5.00 }]);
// console.log(order.generateReceipt());