// Subject 인터페이스 
interface Payment {
    request (amount: number):void
}
// Real Subject 실제객체
class Cash implements Payment {
    request(amount: number){
        console.log( `결제요청.. 금액: ${amount}`)
    }
}
const targetObject = new Cash();
// Proxy
const paymentProxy = new Proxy(targetObject, { 
    get: (object, prop) => {
        if(prop === 'request'){
            return object[prop];
        }
        throw new Error("operation not implemented");
    }
});