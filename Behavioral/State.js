class State {
    handle() {}
}

class OnState extends State {
    handle() {
        console.log("Light is ON");
    }
}

class OffState extends State {
    handle() {
        console.log("Light is OFF");
    }
}

class Light {
    constructor() {
        this.state = new OffState();  // 초기 상태
    }

    setState(state) {
        this.state = state;
    }

    pressButton() {
        this.state.handle();
    }
}

// 사용 예제
const light = new Light();
light.pressButton();  // "Light is OFF"

light.setState(new OnState());
light.pressButton();  // "Light is ON"

// 객체의 상태를 클래스로 분리하여, 상태에 따라 동작이 변경되는 패턴