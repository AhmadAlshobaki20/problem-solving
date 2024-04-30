"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.storage = [];
    }
    // Adds an element to the top of the stack
    Stack.prototype.push = function (item) {
        this.storage.push(item);
    };
    Stack.prototype.pop = function () {
        return this.storage.pop() || null;
    };
    // Returns the element at the top of the stack without removing it.
    // If the stack is empty, it returns null
    Stack.prototype.peek = function () {
        return this.storage.length > 0 ? this.storage[this.storage.length - 1] : null;
    };
    // Checks if the stack is empty
    Stack.prototype.isEmpty = function () {
        return this.storage.length === 0;
    };
    // return the size of the stack
    Stack.prototype.Size = function () {
        return this.storage.length;
    };
    // return the stack it self 
    Stack.prototype.toString = function () {
        return this.storage;
    };
    return Stack;
}());
exports.default = Stack;
