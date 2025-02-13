// 서브 시스템 (복잡한 시스템)
class CPU {
    start() { console.log("CPU started"); }
}
class Memory {
    load() { console.log("Memory loaded"); }
}
class HardDrive {
    read() { console.log("HardDrive reading data"); }
}

// 퍼사드 클래스 (간단한 인터페이스 제공)
class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    start() {
        this.cpu.start();
        this.memory.load();
        this.hardDrive.read();
        console.log("Computer started successfully!");
    }
}

// 사용 예제
const computer = new ComputerFacade();
computer.start();


// 복잡한 서브 시스템을 단순한 인터페이스로 제공하는 패턴

// 여러 모듈을 하나의 API로 묶어서 제공