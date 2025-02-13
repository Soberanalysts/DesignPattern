class Element {
    accept(visitor) {
        visitor.visit(this);
    }
}

class ConcreteElementA extends Element {
    operationA() {
        console.log("Operation A executed");
    }
}

class ConcreteElementB extends Element {
    operationB() {
        console.log("Operation B executed");
    }
}

// 방문자(Visitor) 클래스
class Visitor {
    visit(element) {
        if (element instanceof ConcreteElementA) {
            element.operationA();
        } else if (element instanceof ConcreteElementB) {
            element.operationB();
        }
    }
}

// 사용 예제
const visitor = new Visitor();
const elementA = new ConcreteElementA();
const elementB = new ConcreteElementB();

elementA.accept(visitor);  // "Operation A executed"
elementB.accept(visitor);  // "Operation B executed"

// 객체의 구조를 변경하지 않고, 새로운 기능을 추가하는 패턴

// 기존 클래스에 직접 메서드를 추가하지 않고 "방문자 객체"를 통해 확장 가능