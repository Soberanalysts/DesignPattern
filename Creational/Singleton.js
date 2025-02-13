class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.data = "I am a Singleton";
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    getData() {
        return this.data;
    }
}

// 인스턴스 생성
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true (같은 인스턴스 공유)
console.log(instance1.getData()); // "I am a Singleton"

//instance1과 instance2는 동일한 인스턴스를 참조!


//하나의 인스턴스만 생성되도록 보장하는 패턴

// 같은 인스턴스를 여러 곳에서 공유할 때 사용
// 보통 앱 설정, 데이터베이스 연결, 캐싱 등에 활용