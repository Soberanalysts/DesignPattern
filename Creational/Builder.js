class Burger {
    constructor() {
        this.ingredients = [];
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
        return this; // 체이닝 지원
    }

    build() {
        return `Burger with: ${this.ingredients.join(", ")}`;
    }
}

// 빌더 사용
const myBurger = new Burger()
    .addIngredient("Bun")
    .addIngredient("Lettuce")
    .addIngredient("Tomato")
    .addIngredient("Patty")
    .build();

console.log(myBurger); // "Burger with: Bun, Lettuce, Tomato, Patty"

// 복잡한 객체 생성을 단계별로 수행할 수 있도록 하는 패턴

// 객체 생성 과정이 복잡할 때 사용
// 코드의 가독성과 유지보수성을 높일 수 있음