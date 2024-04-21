class stack {
  constructor(length) {
    this.items = [];
    this.top;
    this.length = length;
  }

  isFull() {
    if (this.top === this.length - 1) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.top == -1) {
      return true;
    } else false;
  }

  push(key) {
    if (this.isFull()) {
      console.log("Stack overflow!");
    } else {
      this.top++;
      this.items[this.top] = key;
    }
  }
  pop() {
    if (this.isEmpty()) {
      return console.log("isEmpty");
    } else {
      const dltItm = this.items[this.top];
      this.top--;
    }
  }
  display() {
    if (this.isEmpty()) {
      return console.log("isEmpty");
    } else {
      for (let i = this.top; i >= 0; i--) {
        console.log(this.items[i]);
      }
    }
  }
  displayTop() {
    if (this.isEmpty()) {
      console.log("isEmpty");
    } else {
      this.items[this.top];
      console.log(this.items[this.top]);
    }
  }
}

mystack = new stack(5);

mystack.top = -1;

mystack.display();

mystack.push(99);
mystack.push(101);
mystack.push(55);
mystack.push(55);
mystack.push(559);
mystack.displayTop();
// mystack.pop()
// mystack.display()
