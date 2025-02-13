const carPrototype = {
    drive() {
        console.log(`${this.model} is driving!`);
    },
    setModel(model) {
        this.model = model;
        return this;
    }
};

// 프로토타입을 이용한 객체 생성
const car1 = Object.create(carPrototype).setModel("Tesla");
const car2 = Object.create(carPrototype).setModel("BMW");

car1.drive(); // "Tesla is driving!"
car2.drive(); // "BMW is driving!"

// 기존 객체를 복제하여 새로운 객체를 생성하는 패턴

// 새로운 인스턴스를 생성하는 비용이 클 때 유용
// 객체를 복사해서 새로운 인스턴스를 빠르게 만들 수 있음