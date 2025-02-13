class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    update(data) {
        console.log("Received data:", data);
    }
}

// 사용 예제
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify("Hello Observers!");  // 두 Observer가 알림을 받음



// 객체 간 의존성을 정의하여 한 객체의 상태 변화가 다른 객체들에게 자동으로 반영되도록 하는 패턴