function returnVoid(message: string): void {
  console.log(message);

  return undefined; 
  //유일하게 undefined만 들어갈 수 있음
}

returnVoid('리턴이 없다.');