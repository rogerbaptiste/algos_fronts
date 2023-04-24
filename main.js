//add
var mySLL = new SLL();
mySLL.addFront(60);
console.log(mySLL);

class SLLNode {
    constructor(num) {
        this.value = num;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }
}

var mySLL = new SLL();
mySLL.addFront(60);
console.log(mySLL);



//Remove
class SLLNode {
    constructor(num) {
        this.value = num;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    removeHead() {
        if (this.head === null) {
            return null;
        } else {
            let currentHead = this.head;
            this.head = currentHead.next;
            return this.head;
        }
    }
}

var mySLL = new SLL();
mySLL.addFront(60);
mySLL.addFront(70);
console.log(mySLL.removeHead());
console.log(mySLL.removeHead());
console.log(mySLL.removeHead());


//Front

class SLLNode {
    constructor(num) {
        this.value = num;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        var newNode = new SLLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    removeHead() {
        if (this.head === null) {
            return null;
        } else {
            let currentHead = this.head;
            this.head = currentHead.next;
            return this.head;
        }
    }

    getHeadValue() {
        if (this.head === null) {
            return null;
        } else {
            return this.head.value;
        }
    }
}

var mySLL = new SLL();
mySLL.addFront(60);
mySLL.addFront(70);
console.log(mySLL.getHeadValue());
console.log(mySLL.removeHead());
console.log(mySLL.getHeadValue());
console.log(mySLL.removeHead());
console.log(mySLL.getHeadValue());
