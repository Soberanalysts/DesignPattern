// 기본 객체
class Coffee {
    cost() {
        return 5;
    }
}

// 데코레이터 (Decorator)
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2;  // 우유 추가 비용
    }
}

// 사용 예제
const simpleCoffee = new Coffee();
const milkCoffee = new MilkDecorator(simpleCoffee);

console.log(simpleCoffee.cost()); // 5
console.log(milkCoffee.cost());   // 7


// 기존 객체에 새로운 기능을 동적으로 추가할 수 있는 패턴

// 기존 코드를 변경하지 않고 확장 가능