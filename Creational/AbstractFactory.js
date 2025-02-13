class Sedan {
    drive() {
        console.log("Driving a Sedan!");
    }
}

class SUV {
    drive() {
        console.log("Driving an SUV!");
    }
}

class CarFactory {
    static createCar(type) {
        switch (type) {
            case "sedan": return new Sedan();
            case "suv": return new SUV();
            default: throw new Error("Invalid car type");
        }
    }
}

class AbstractCarFactory {
    static getFactory() {
        return CarFactory;
    }
}

// 추상 팩토리 사용
const factory = AbstractCarFactory.getFactory();
const myCar = factory.createCar("suv");

myCar.drive(); // "Driving an SUV!"



// 관련 객체들을 그룹화하여 생성하는 팩토리 패턴의 확장형

// 여러 개의 팩토리를 묶어서 사용
// 서로 관련된 객체들을 생성할 때 유용