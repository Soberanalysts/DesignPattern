class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.load();
    }

    load() {
        console.log(`Loading image: ${this.filename}`);
    }

    display() {
        console.log(`Displaying image: ${this.filename}`);
    }
}

// 프록시 (Proxy)
class ImageProxy {
    constructor(filename) {
        this.filename = filename;
    }

    display() {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

// 사용 예제
const image = new ImageProxy("photo.jpg");
image.display();  // 첫 호출 시 로드 후 표시
image.display();  // 두 번째 호출 시 바로 표시

// 실제 객체에 대한 접근을 제어하는 대리 객체를 제공하는 패턴

// 보안, 로깅, 캐싱, 접근 제어 등에 사용