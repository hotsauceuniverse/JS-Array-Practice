//배열 : 여러개의 값을 모아놓은것 - 복합자료형
const str = '안녕하세요'
console.log(str[2]); //하 = 배열의 기준은 0부터 시작한다.
console.log(str[str.length - 3]); //하 = 위의 식과 동일한 값을 출력함

const x = ['장세영', 10, true, 4*3]
console.log(x.length); //4

//배열의 메소드
//배열 뒤에 요소 추가하기 : push(요소)
const a = [52, 273, '안녕', '하세요']
console.log(a.push(100)); //5
console.log(a); //[52, 273, '안녕', '하세요', 100]

//배열 중간에 요소 추가하기 : splice(인덱스, 0, 요소)
console.log(a.splice(1, 0, '추가'));
console.log(a); //(6) [52, '추가', 273, '안녕', '하세요', 100]

//인덱스로 배열의 요소 제거하기 : splice(인덱스, 1)
console.log(a.splice(0, 1)); //[52]
console.log(a); //(5) ['추가', 273, '안녕', '하세요', 100]

//배열 내부에서 값의 위치 찾기 : indexOf(요소)
console.log(a.indexOf('안녕')); // 2
console.log(a.indexOf('장세영')); // -1출력 : 원하는 요소가 배열 안에 없을때 -1을 출력한다.

//값으로 배열의 요소 제거하기 : indexOf() + splice() 활용
const index = a.indexOf('하세요');
console.log(a.splice(index, 1)); //['하세요']
console.log(a); //(4) ['추가', 273, '안녕', 100]

//for of, for in 반복문 = 배열 등과 함께 사용
const i = ['미니언즈', '짱구', '도라에몽', '스타벅스']
for (const 이름 of i) {
  console.log(이름)
} //미니언즈 - 짱구 - 도라에몽 - 스타벅스

for (const 이름 in i) {
  console.log(이름)
} //0 - 1 - 2 - 3 
//=> for in과 for of의 차이점 : for in은 인덱스를 출력하고 for of는 값을 출력한다.

for (const 만화 in i) {
  console.log(만화, i[만화])
} //0 미니언즈 1 짱구 2 도라에몽 3 스타벅스


