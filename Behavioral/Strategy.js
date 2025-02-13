class Strategy {
    execute() {}
}

class StrategyA extends Strategy {
    execute() {
        console.log("Executing Strategy A");
    }
}

class StrategyB extends Strategy {
    execute() {
        console.log("Executing Strategy B");
    }
}

class Context {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    executeStrategy() {
        this.strategy.execute();
    }
}

// 사용 예제
const context = new Context();
context.setStrategy(new StrategyA());
context.executeStrategy();  // "Executing Strategy A"

context.setStrategy(new StrategyB());
context.executeStrategy();  // "Executing Strategy B"

// 동일한 작업을 여러 방식으로 수행할 수 있도록 알고리즘을 캡슐화하는 패턴