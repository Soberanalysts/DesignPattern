// 기본 컴포넌트
class Component {
    constructor(name) {
        this.name = name;
    }
    show() {
        console.log(this.name);
    }
}

// 개별 객체 (Leaf)
class File extends Component {}

// 그룹 객체 (Composite)
class Folder extends Component {
    constructor(name) {
        super(name);
        this.children = [];
    }
    
    add(child) {
        this.children.push(child);
    }

    show() {
        console.log("Folder: " + this.name);
        this.children.forEach(child => child.show());
    }
}

// 사용 예제
const file1 = new File("File 1");
const file2 = new File("File 2");
const folder = new Folder("Main Folder");

folder.add(file1);
folder.add(file2);

folder.show();


// 객체를 트리 구조로 구성하여 개별 객체와 그룹을 동일하게 다룰 수 있도록 하는 패턴

// 파일 시스템(폴더-파일 구조), UI 구성 요소 등에서 활용됨