class Handler {
    setNext(handler) {
        this.next = handler;
        return handler;
    }

    handle(request) {
        if (this.next) {
            return this.next.handle(request);
        }
        return null;
    }
}

class AuthHandler extends Handler {
    handle(request) {
        if (request.authenticated) {
            console.log("Auth Passed");
            return super.handle(request);
        }
        console.log("Auth Failed");
        return null;
    }
}

class LoggingHandler extends Handler {
    handle(request) {
        console.log("Logging request...");
        return super.handle(request);
    }
}

// 사용 예제
const auth = new AuthHandler();
const log = new LoggingHandler();

auth.setNext(log);  // 체인 연결

auth.handle({ authenticated: true });  // "Auth Passed" → "Logging request..."
auth.handle({ authenticated: false }); // "Auth Failed"


// 하나의 요청을 여러 개의 객체가 처리할 수 있도록 체인을 구성하는 패턴

// 요청이 처리될 때까지 핸들러(handler)가 순차적으로 요청을 전달함