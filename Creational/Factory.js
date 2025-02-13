class Car {
    constructor(model) {
        this.model = model;
    }
    drive() {
        console.log(`${this.model} is driving!`);
    }
}

class CarFactory {
    createCar(type) {
        switch (type) {
            case "sedan": return new Car("Sedan");
            case "suv": return new Car("SUV");
            default: return new Car("Unknown");
        }
    }
}

// 팩토리 사용
const factory = new CarFactory();
const car1 = factory.createCar("sedan");
const car2 = factory.createCar("suv");

car1.drive(); // "Sedan is driving!"
car2.drive(); // "SUV is driving!"

// 객체 생성을 캡슐화하여 여러 하위 클래스를 생성할 수 있는 패턴
// 어떤 객체를 생성해야 할지 조건에 따라 결정할 때 유용