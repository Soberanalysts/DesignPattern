class Iterator {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.items.length;
    }

    next() {
        return this.hasNext() ? this.items[this.index++] : null;
    }
}

// 사용 예제
const iterator = new Iterator(["A", "B", "C"]);

while (iterator.hasNext()) {
    console.log(iterator.next()); // "A" → "B" → "C"
}

// 컬렉션(배열, 리스트 등)의 내부 구조를 노출하지 않고 요소를 순차적으로 접근하는 패턴