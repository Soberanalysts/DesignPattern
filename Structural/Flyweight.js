class ShapeFactory {
    constructor() {
        this.shapes = {}; // 공유 객체 저장소
    }

    getShape(color) {
        if (!this.shapes[color]) {
            this.shapes[color] = new Circle(color);
        }
        return this.shapes[color];
    }
}

class Circle {
    constructor(color) {
        this.color = color;
    }

    draw() {
        console.log(`Drawing a ${this.color} circle`);
    }
}

// 사용 예제
const factory = new ShapeFactory();


const redCircle1 = factory.getShape("Red");
const redCircle2 = factory.getShape("Red");

console.log(redCircle1 === redCircle2); // true (같은 객체 공유)

console.log(redCircle2.draw());


// 공유 가능한 객체를 만들어 메모리 사용을 줄이는 패턴

// 동일한 객체를 반복해서 생성하지 않고 공유하여 성능 최적화