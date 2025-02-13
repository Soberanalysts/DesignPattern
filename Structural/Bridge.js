// 장치(Device) 추상화
class Device {
    constructor(name) {
        this.name = name;
    }
    turnOn() {
        console.log(`${this.name} is now ON`);
    }
    turnOff() {
        console.log(`${this.name} is now OFF`);
    }
}

// 리모컨(Remote) 추상화
class Remote {
    constructor(device) {
        this.device = device;
    }
    powerOn() {
        this.device.turnOn();
    }
    powerOff() {
        this.device.turnOff();
    }
}

// 사용 예제
const tv = new Device("TV");
const remote = new Remote(tv);

remote.powerOn();  // "TV is now ON"
remote.powerOff(); // "TV is now OFF"


// 기능과 구현을 분리하여 독립적으로 확장할 수 있도록 하는 패턴

// 여러 기능을 독립적으로 조합할 때 유용함