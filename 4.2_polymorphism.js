// Polymorphism different instance having same method behaving diffrent


class First {
    add(){
        console.log('first')
    }
}

class Second extends First{
    add(){
        console.log('second')
    }
}

class Third extends Second{
    add(){
        console.log('Thrd')
    }
}
asim = new Third().add()
console.log(asim)

// above exmp is basic

class A {
    area(x,y){
        console.log(x*y)
    }
}
class B extends A{
    area(a,b){
        super.area(a,b)
        console.log('class b')
    }
}

let obs = new B();
let output = obs.area(10,20)
