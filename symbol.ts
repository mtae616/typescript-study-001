console.log(Symbol('foo') === Symbol("foo"));

const sym = Symbol();

const obj = {
  [sym]: "value",
  //위의 sym 이 들어와서 접근 불가
};

obj[sym]