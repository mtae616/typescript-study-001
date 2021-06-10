function returnAny(message: any): any {
                  //message에 어떤 것이 들어갈 지 힌트를 줘야 함
  console.log(message);
}

const any1 = returnAny('리턴은 아무거나!');
//반환 any

any1.toString();
console.log(typeof any1);

let looselyTypped: any = {};

const d = looselyTypped.a.b.c.d;

function leakingAny(obj: any) {
  const a:number = obj.num;
  const b = a + 1;
  return b;  
}

const c = leakingAny({ num : 0});