// Concrete strategy for MobileMoney payment
var MobileMoney = /** @class */ (function () {
    function MobileMoney() {
    }
    MobileMoney.prototype.pay = function (amount) {
        console.log("Paid ".concat(amount, " using MobileMoney."));
    };
    return MobileMoney;
}());
// Concrete strategy for Cash payment
var Cash = /** @class */ (function () {
    function Cash() {
    }
    Cash.prototype.pay = function (amount) {
        console.log("Paid ".concat(amount, " in cash."));
    };
    return Cash;
}());
// Concrete strategy for CreditCard payment
var CreditCard = /** @class */ (function () {
    function CreditCard() {
    }
    CreditCard.prototype.pay = function (amount) {
        console.log("Paid ".concat(amount, " using CreditCard."));
    };
    return CreditCard;
}());
// Context class that uses a PaymentStrategy
var PaymentContext = /** @class */ (function () {
    function PaymentContext(strategy) {
        this.strategy = strategy;
    }
    PaymentContext.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    PaymentContext.prototype.pay = function (amount) {
        this.strategy.pay(amount);
    };
    return PaymentContext;
}());
// Usage example:
var paymentContext = new PaymentContext(new MobileMoney());
paymentContext.pay(100); // Paid 100 using MobileMoney.
paymentContext.setStrategy(new Cash());
paymentContext.pay(80); // Paid 80 in cash.
paymentContext.setStrategy(new CreditCard());
paymentContext.pay(200); // Paid 200 using CreditCard.
