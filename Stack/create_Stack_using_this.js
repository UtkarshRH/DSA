class Stack{
    constructor(){
        this.items=[];
    }

    push(elem){
        this.items.push(elem)
    }
    pop(){
        if(this.isEmpty()) return "stack is empty"
        return this.items.pop()
    }
    peek(){
        if(this.items.length===0) return "stack is empty"
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length===0
    }

    size(){
        return this.items.length
    }

    print(){
        console.log("Stack: ",this.items.toString())
    }
}

const stack=new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
stack.print() // 10,20,30
console.log(stack.pop()) // 30
console.log(stack.peek()) // 20
console.log(stack.isEmpty()) // false
console.log(stack.size()) // 2
stack.print() // 10,20