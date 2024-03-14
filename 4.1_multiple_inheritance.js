let sayHiMixin = {
  sayHi() {
    console.log(` hello ${this.name}`);
  },
  sayBye() {
    console.log(` Bye ${this.name}`);
  },
};

class User {
    constructor(name){
        this.name= name;
    }
}

Object.assign(User.prototype, sayHiMixin)

const asim = new User("asim").sayHi()

console.log(asim)