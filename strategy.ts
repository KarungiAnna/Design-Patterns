// Define the payment strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete strategy for MobileMoney payment
class MobileMoney implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using MobileMoney.`);
  }
}

// Concrete strategy for Cash payment
class Cash implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} in cash.`);
  }
}

// Concrete strategy for CreditCard payment
class CreditCard implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using CreditCard.`);
  }
}

// Context class that uses a PaymentStrategy
class PaymentContext {
  private strategy: PaymentStrategy;

  constructor(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: PaymentStrategy) {
    this.strategy = strategy;
  }

  pay(amount: number) {
    this.strategy.pay(amount);
  }
}

// Usage example:
const paymentContext = new PaymentContext(new MobileMoney());
paymentContext.pay(100); // Paid 100 using MobileMoney.

paymentContext.setStrategy(new Cash());
paymentContext.pay(80);  // Paid 80 in cash.

paymentContext.setStrategy(new CreditCard());
paymentContext.pay(200); // Paid 200 using CreditCard.
