let x: [string, number];
//앞이 꼭 string , 뒤가 꼭 number여야 함

x = ["hello", 29];

// x = [10, 'taesoo']; 순서대로 안 넣으면 오류 남

// x[2]; length 가 안 맞아서 오류남, 2가지가 꼭 들어가야 함

const person: [string, number] = ["taesoo", 29];

const [first, second] = person; 
//분해할당 , first 와 second의 타입이 딱 맞음