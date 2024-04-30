class Stack<T>{

    private storage: T[] = [];
    // Adds an element to the top of the stack
    push(item: T): void {
        this.storage.push(item);
    }

    pop(): T | null {
        return this.storage.pop() || null;
    }

    // Returns the element at the top of the stack without removing it.
    // If the stack is empty, it returns null
    peek(): T | null {
        return this.storage.length > 0 ? this.storage[this.storage.length - 1] : null;
    }

    // Checks if the stack is empty
    isEmpty(): boolean {
        return this.storage.length === 0;
    }

    // return the size of the stack
    Size(): number {
        return this.storage.length;
    }

    // return the stack it self 
    toString(): T[] {
        return this.storage;
    }

}


export default Stack;