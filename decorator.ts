
// Component interface
interface Notifier {
  send(message: string): void;
}

// Concrete Component
class EmailNotifier implements Notifier {
  send(message: string): void {
    console.log(`Sending EMAIL: ${message}`);
  }
}

// Decorator
class NotifierDecorator implements Notifier {
  constructor(protected wrappee: Notifier) {}
  send(message: string): void {
    this.wrappee.send(message);
  }
}

// Concrete Decorators
class SMSNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Sending SMS: ${message}`);
  }
}

class SlackNotifier extends NotifierDecorator {
  send(message: string): void {
    super.send(message);
    console.log(`Sending Slack: ${message}`);
  }
}


// Usage
let notifier: Notifier = new EmailNotifier();
notifier = new SMSNotifier(notifier);
notifier = new SlackNotifier(notifier);

notifier.send("System Alert!");

