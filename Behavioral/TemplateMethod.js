class Game {
    play() {
        this.initialize();
        this.start();
        this.end();
    }

    initialize() {
        throw new Error("initialize() must be overridden");
    }

    start() {
        throw new Error("start() must be overridden");
    }

    end() {
        console.log("Game Over");
    }
}

// 하위 클래스에서 세부 구현
class Football extends Game {
    initialize() {
        console.log("Football Game Initialized.");
    }

    start() {
        console.log("Football Game Started!");
    }
}

// 사용 예제
const game = new Football();
game.play();
/*
Football Game Initialized.
Football Game Started!
Game Over
*/




// 상위 클래스에서 알고리즘의 기본 구조를 정의하고, 하위 클래스에서 세부 동작을 구현하도록 하는 패턴

// 공통적인 흐름을 정의하고, 변경이 필요한 부분만 하위 클래스에서 재정의 가능