var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Concrete Component
var EmailNotifier = /** @class */ (function () {
    function EmailNotifier() {
    }
    EmailNotifier.prototype.send = function (message) {
        console.log("Sending EMAIL: ".concat(message));
    };
    return EmailNotifier;
}());
// Decorator
var NotifierDecorator = /** @class */ (function () {
    function NotifierDecorator(wrappee) {
        this.wrappee = wrappee;
    }
    NotifierDecorator.prototype.send = function (message) {
        this.wrappee.send(message);
    };
    return NotifierDecorator;
}());
// Concrete Decorators
var SMSNotifier = /** @class */ (function (_super) {
    __extends(SMSNotifier, _super);
    function SMSNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSNotifier.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        console.log("Sending SMS: ".concat(message));
    };
    return SMSNotifier;
}(NotifierDecorator));
var SlackNotifier = /** @class */ (function (_super) {
    __extends(SlackNotifier, _super);
    function SlackNotifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SlackNotifier.prototype.send = function (message) {
        _super.prototype.send.call(this, message);
        console.log("Sending Slack: ".concat(message));
    };
    return SlackNotifier;
}(NotifierDecorator));
// Usage
var notifier = new EmailNotifier();
notifier = new SMSNotifier(notifier);
notifier = new SlackNotifier(notifier);
notifier.send("System Alert!");
