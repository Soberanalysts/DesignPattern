class Mediator {
    constructor() {
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }

    sendMessage(message, sender) {
        this.users.forEach(user => {
            if (user !== sender) {
                user.receive(message);
            }
        });
    }
}

class User {
    constructor(name, mediator) {
        this.name = name;
        this.mediator = mediator;
        mediator.addUser(this);
    }

    send(message) {
        console.log(`${this.name} sent: ${message}`);
        this.mediator.sendMessage(message, this);
    }

    receive(message) {
        console.log(`${this.name} received: ${message}`);
    }
}

// 사용 예제
const chat = new Mediator();
const user1 = new User("Alice", chat);
const user2 = new User("Bob", chat);

user1.send("Hello!");  // Alice → Bob
user2.send("Hi!");     // Bob → Alice

// 객체 간 직접적인 통신을 피하고, 중재자(Mediator)가 객체 간의 상호작용을 관리하는 패턴