const node = require('./_DNode');

class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertFirst(value) {
        this.head = new node(value, this.head, null);
        if(this.tail === null) {
            this.tail = this.head;
        }
    }

    insertBefore(value, key) {
        if(this.head === null) return null;
        else {
            let previousNode = null; 
            let currentNode = this.head;

            while(currentNode.value !== key) {
                if(currentNode.next === null) {
                    return null;
                }

                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            if(!previousNode) this.insertFirst(value);
            else {
                previousNode.next = new node(value, previousNode.next, previousNode);
                currentNode.prev = previousNode.next;
            }
        }
    }

    insertAfter(value, key) {
        if(this.head === null) return null;
        else {
            let foundNode = this.find(key);
            let nextNode = foundNode.next;

            if(!foundNode) return null;
            else {
                foundNode.next = new node(value, nextNode, foundNode);
                nextNode.prev = foundNode.next;
            }
        }
    }
    //| 0| 1| 2| 3| 4| 5| 6|
    //| 0| x| 1| 2| 3| 4| 5| 6|
    insertAt(value, index) {
        if(index < 0) throw new Error('Index cannot be less than 0.');
        else {
            let previousNode = null; 
            let currentNode = this.head; 

            for(let i = 0; i < index; i++) {
                if(currentNode === null) return null;
                else {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
            }

            if(!previousNode) this.insertFirst(value); 
            else {
                previousNode.next = new node(value, currentNode, previousNode);
                currentNode.prev = previousNode.next;
            }
        }
    }

    insertLast(value) {
        if(this.head === null) this.insertFirst(value);
        else {
            let currentNode = this.tail;

            currentNode.next = new node(value, null, currentNode);
            this.tail = currentNode.next;
        }
    }

    find(value) {
        if(this.head === null) return null;
        else {
            let currentNode = this.head;

            while(currentNode.value !== value) {
                if(currentNode.next === null) return null;
                else {
                    currentNode = currentNode.next;
                }
            }

            return currentNode;
        }
    }

    remove(value) {
        if(this.head === null) return null;
        else {
            let previousNode = null;
            let currentNode = this.head;

            while(currentNode.value !== value) {
                if(currentNode.next === null) return null;
                else {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
            }

            if(!previousNode) this.head = currentNode.next;
            else {
                let nextNode = currentNode.next;
                previousNode.next = nextNode;
                nextNode.prev = previousNode;
            }

        }
    }
}

function display(ll) {
    if(ll.head === null) console.log('List is empty.');
    else {
        let currentNode = ll.head;
        do {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        } while(currentNode !== null);
    }
}

function reverse(ll) {
    if(ll.head === null || ll.head.next === null) return ll;
    else {
        let currentNode = ll.head;

        while(currentNode.next !== null) {
            let next = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode.prev = next;
            currentNode = next;
        }

        currentNode.next = currentNode.prev;
        currentNode.prev = null;

        ll.tail = ll.head;
        ll.head = currentNode;
        return ll;
    }
}

function mainDLL() {
    let DLL = new doublyLinkedList();
    DLL.insertLast('Aquaria');
    DLL.insertLast('Caprica');
    DLL.insertLast('Gemenon');
    DLL.insertLast('Picon');
    DLL.insertLast('Sagittaron');

    console.log('Added original');
    console.log(' ');
    display(DLL);
    console.log(' ');
    console.log(' ');

    DLL.insertLast('Tauron');
    
    console.log('Added Tauron');
    console.log(' ');
    display(DLL);
    console.log(' ');
    console.log(' ');

    DLL.remove('Picon');
    
    console.log('Removed Picon');
    console.log(' ');
    display(DLL);
    console.log(' ');
    console.log(' ');


    reverse(DLL);
    console.log('Reversed: ');
    console.log(' ');
    display(DLL);
    console.log(' ');
    console.log(' ');

    reverse(DLL);
    console.log('Reversed again: ');
    console.log(' ');
    display(DLL);

}

mainDLL();