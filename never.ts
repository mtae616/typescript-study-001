function error(message: string): never {
                                //아무것도 리턴하지 않는다
  throw new Error(message);
 //throw 하면 아무것도 리턴되지 않기 때문에 never를 쓸 수 있음 
}

function fail(){ // 위에 거 따라서 never
  return error('failed');
}

function infiniteLoop() : never { 
  //무한루프 쓸 때도 while 밑으로 가지 않기 때문에 쓸 수 있음
  while(true){

  }
}

let a : string = 'hello';
if (typeof a !== 'string'){
  a;
  //string인데, string타입이 아닐 경우이기 때문에 never로 형변환됨,
  //never이기 때문에 아무것도 할당할 수 없음
}

declare const b: string | number;
if(typeof b !== 'number') {
  b; //string 으로 할당
}

type Indexable<T> = T extends string ? T & {[index:string]:any} :never;
//삼항 연산자로 타입 지정