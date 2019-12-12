const node = require('./_SNode');

class linkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(value) {
        this.head = new node(value, this.head);
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
                previousNode.next = new node(value, previousNode.next);
            }
        }
    }

    insertAfter(value, key) {
        if(this.head === null) return null;
        else {
            let foundNode = this.find(key);

            if(!foundNode) return null;
            else {
                foundNode.next = new node(value, foundNode.next);
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
                previousNode.next = new node(value, currentNode);
            }
        }
    }

    insertLast(value) {
        if(this.head === null) this.insertFirst(value);
        else {
            let currentNode = this.head;

            while(currentNode.next !== null) {
                currentNode = currentNode.next;
            }

            currentNode.next = new node(value, null);
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
                previousNode.next = currentNode.next;
            }

        }
    }
}

// 3. Supplemental functions for a linked list

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

function size(ll) {
    if(ll.head === null) return 0;
    else {
        let counter = 0;
        let currentNode = ll.head;

        while(currentNode) {
            currentNode = currentNode.next;
            counter++;
        }
        return counter;
    }
}

function isEmpty(ll) {
    if(ll.head === null) return true;
    else return false;
}

function findPrevious(ll, value) {
    if(ll.head === null) return null;
    else {
        let previousNode = null;
        let currentNode = ll.head;

        while(currentNode.value !== value) {
            if(currentNode.next === null) return null;
            else {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
        if(previousNode) return previousNode;
        return 'Cannot get previous as target is the head.';
    }
}

function findLast(ll) {
    if(ll.head === null) return null;
    else {
        let currentNode = ll.head;

        while(currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        
        return currentNode;
    }
}

// 4. Mystery program
    //What does it do? modifies the LL such that no two elements have the same value;
    //Complexity? O(n^2)

// 5. Reverse a List

function reverse(ll) {
    if(ll.head === null || ll.head.next === null) return ll;
    else {
        let previousNode = null;
        let currentNode = ll.head;
        let next = ll.head.next;

        while(currentNode) {
            next = currentNode.next;
            currentNode.next = previousNode;
            previousNode = currentNode;
            currentNode = next;
        }

        ll.head = previousNode;
        return ll;
    }

}


// 6. 3rd from the end

function thirdFromEnd(ll) {
    if(ll.head === null) return null;
    else {
        let currentNode = ll.head;
        let counter = 0;

        // 0|1|2|3|4|5
        while(currentNode.next !== null) {
            currentNode = currentNode.next;
            counter++;
        }

        if(counter - 2 < 0) {
            return 'Cannot find third from the end as it would be out of bounds.';
        } else {
            let foundIndex = counter -2;
            counter = 0;
            currentNode = ll.head;

            while(counter !== foundIndex) {
                currentNode = currentNode.next;
                counter++;
            }
            return currentNode;
        }
    }
}

// 7. Middle of a list

function middle(ll) {
    if(ll.head === null || ll.head.next === null) return ll.head;
    else {
        let middlePoint = Math.ceil(size(ll) / 2);
        let counter = 1;
        let currentNode = ll.head;

        while (counter !== middlePoint) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}


// 8. Cycle in a list

function cycleTest(ll) {
    if(ll.head === null || ll.head.next === null) return false;
    else {
        let currentNode = ll.head;
        while(currentNode.next !== null) {
            let testNode = ll.head;

            while(currentNode !== testNode ) {
                if(currentNode.next === testNode) return true;
                testNode = testNode.next;
            } 
            if(currentNode.next === testNode) return true;

            currentNode = currentNode.next;
        }
        return false;
    }

}


function main() {
    let SLL = new linkedList();

    console.log('SLL empty? ' + isEmpty(SLL));

    SLL.insertLast('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');

    console.log('Added original');
    console.log(' ');
    display(SLL);
    console.log(' ');
    console.log(' ');
    
    SLL.insertLast('Tauhida');

    console.log('Added Tauhida');
    console.log(' ');
    display(SLL);
    console.log('Last item? ' + findLast(SLL).value);
    console.log(' ');
    console.log(' ');

    SLL.remove('squirrel');

    console.log('Removed squirrel');
    console.log(' ');
    display(SLL);
    console.log(' ');
    console.log(' ');

    SLL.insertBefore('Athena', 'Boomer');

    console.log('Inserted Athena before Boomer');
    console.log(' ');
    display(SLL);
    console.log(' ');
    console.log(' ');

    SLL.insertAfter('Hotdog', 'Helo');

    console.log('Inserted Hotdog after Helo');
    console.log(' ');
    display(SLL);
    console.log(' ');
    console.log(' ');

    SLL.insertAt('Kat', 2);

    console.log('Inserted Kat in third place');
    console.log(' ');
    display(SLL);
    console.log(' ');
    console.log(' ');

    SLL.remove('Tauhida');

    console.log('Removed Tauhida');
    console.log(' ');
    display(SLL);
    console.log(' ');
    console.log(' ');

    console.log('SLL empty? ' + isEmpty(SLL));
    console.log('SLL size? ' + size(SLL));
    console.log('Previous of Kat? ' + findPrevious(SLL, 'Kat').value);
    console.log('Previous of Apollo? ' + findPrevious(SLL, 'Apollo'));
    console.log('Last item? ' + findLast(SLL).value);

    console.log(' ');
    console.log(' ');

    reverse(SLL);
    console.log('Reversed: ');
    display(SLL);
    console.log('Last item? ' + findLast(SLL).value);
    console.log('Third from the end? ' + thirdFromEnd(SLL).value);
    console.log('Middle: ' + middle(SLL).value);


    let a = new node('A', null);
    a.next = a;
    let c = new node('c', null);
    c.next = a;
    let b = new node('b', null);
    b.next = c;

    let cycleList = new linkedList();
    cycleList.head = a;

    console.log('Cycle test on a ciclical LL: ' + cycleTest(cycleList));
    console.log('Cycle test on a non-ciclical LL: ' + cycleTest(SLL));
    a.next = b;
    console.log('Second Cycle test on a ciclical LL: ' + cycleTest(cycleList));
}

main();


