declare const maybe: unknown;
//타입만 선언할 때에 declare 를 사용

//const aNumber :number = maybe;
//unknown은 number에 바로 할당할 수 없음
//아마도 동적으로 할당을 해 줘야 하기 때문에...?

if (maybe === true) {
  const aBoolean:boolean = maybe;

  //const aString:string = maybe;
  //if문에서 걸림
}

if(typeof maybe === 'string'){
 const aString: string = maybe;

 //const aBoolean:boolean = maybe;
 //if문에서 걸림
}