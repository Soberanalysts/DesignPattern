class Memento {
    constructor(state) {
        this.state = state;
    }
}

class Originator {
    constructor() {
        this.state = "";
    }

    setState(state) {
        console.log(`Setting state to: ${state}`);
        this.state = state;
    }

    saveState() {
        return new Memento(this.state);
    }

    restoreState(memento) {
        this.state = memento.state;
        console.log(`Restored state to: ${this.state}`);
    }
}

// 관리 클래스 (Caretaker)
class Caretaker {
    constructor() {
        this.history = [];
    }

    save(memento) {
        this.history.push(memento);
    }

    undo() {
        return this.history.pop();
    }
}

// 사용 예제
const originator = new Originator();
const caretaker = new Caretaker();

originator.setState("State 1");
caretaker.save(originator.saveState());

originator.setState("State 2");
caretaker.save(originator.saveState());

originator.restoreState(caretaker.undo());  // "Restored state to: State 2"
originator.restoreState(caretaker.undo());  // "Restored state to: State 1"

// 객체의 상태를 저장하고, 이후 복원할 수 있도록 하는 패턴

// Undo(되돌리기) 기능을 구현할 때 유용