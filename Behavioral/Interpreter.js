class Expression {
    interpret(context) {
        throw new Error("interpret() must be implemented");
    }
}

// 숫자(Expression)
class NumberExpression extends Expression {
    constructor(value) {
        super();
        this.value = value;
    }

    interpret() {
        return this.value;
    }
}

// 더하기 연산(Expression)
class AddExpression extends Expression {
    constructor(left, right) {
        super();
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}

// 사용 예제
const five = new NumberExpression(5);
const ten = new NumberExpression(10);
const sum = new AddExpression(five, ten);

console.log(sum.interpret()); // 15


// 특정 언어나 문법을 해석(Interpreter)하는 패턴

// 미니 언어, 수식 계산기, SQL 파서 등에서 사용됨