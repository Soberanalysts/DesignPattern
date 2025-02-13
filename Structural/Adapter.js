// 기존 클래스 (호환되지 않는 인터페이스)
class OldPrinter {
    printText(text) {
        console.log("Old Printer: " + text);
    }
}

// 새로운 인터페이스 (ModernPrinter)
class ModernPrinter {
    printModern(text) {
        console.log("Modern Printer: " + text);
    }
}

// 어댑터 (Adapter)
class PrinterAdapter {
    constructor(oldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    printModern(text) {
        this.oldPrinter.printText(text);  // 기존 메서드를 변환하여 사용
    }
}

// 사용 예제
const oldPrinter = new OldPrinter();
const adapter = new PrinterAdapter(oldPrinter);

adapter.printModern("Hello World!"); // "Old Printer: Hello World!"



// 서로 호환되지 않는 인터페이스를 변환하여 사용할 수 있도록 하는 패턴

// 기존 코드를 수정하지 않고 새로운 인터페이스에 맞출 때 사용됨