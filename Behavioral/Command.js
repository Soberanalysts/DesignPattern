class Command {
    execute() {}
    undo() {}
}

class LightOnCommand extends Command {
    execute() {
        console.log("Light is ON");
    }
    undo() {
        console.log("Light is OFF");
    }
}

// 사용 예제
const lightOn = new LightOnCommand();
lightOn.execute(); // "Light is ON"
lightOn.undo();    // "Light is OFF"


// 요청을 객체로 캡슐화하여 실행 취소(Undo) 및 재실행(Redo) 기능을 지원하는 패턴