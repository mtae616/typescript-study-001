"use strict";
function returnAny(message) {
    //message에 어떤 것이 들어갈 지 힌트를 줘야 함
    console.log(message);
}
var any1 = returnAny('리턴은 아무거나!');
//반환 any
any1.toString();
console.log(typeof any1);
var looselyTypped = {};
var d = looselyTypped.a.b.c.d;
function leakingAny(obj) {
    var a = obj.num;
    var b = a + 1;
    return b;
}
var c = leakingAny({ num: 0 });
c.indexOf('0');
