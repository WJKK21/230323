/* let div = document.createElement('div')

for (let i = 0; i < div.lenght i++) {

}
실행 x */

/* let i, tot = 0;
for (i = 0; i < 100; i ++)
tot = tot+1

document.write('[1] tot = ' + tot + ' <p>')
document.write('[2] i = ' + i)
실행 x */

/* let num = 10
let i = 1;
while (i <=num) {
  document.write(i);
  document.write("</br>")
  i ++;
}
document.write('</br>')
실행 ㅇ */

/* for (let i = 0; i< 10; i ++ ){
  console.log('hello world!')
} 
실행 ㅇ*/

/* for (let i = 0; i < 10; i ++){
  document.getElementById('output').innerHTML += 'hello world <br>'
}
실행 ㅇ */

/* for ( let i = 0; i < 5 ; i ++){
  let name = 'john'
  console.log('hi' + name)
} 
실행 ㅇ */

/* let arr = [1,2,3,4,5];
for (let i = 0 ; i<arr.length; i++) {
  console.log(arr[i])
}
실행 ㅇ */

/* for (let i = 0; i <= 10; i++) {
  console.log(i)
}
실행 ㅇ */

/* for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i + "" + j)
  }
} 실행 ㅇ */

/* let arr = [[1, 'one', 2, 'two' ], [3, 'three', 4, 'four' ]]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  } 실행 ㅇ */


/*   let arry = ['1', '2', '3', '4' ]

  for (let i = 0 ; i < arry[i].lenght; i++) {
    console.log(arry[i])
  } 실행 ㅇ length 였음 */


/*   const hours = (new Date()).getHours()

  if (hours <10) {
    console.log(' 아침밥')
  } else { 
    if (hours < 16 ) {
      console.log(' 점심 ')
    }else  {
      console.log('저녁 ')
    }
  } 실행 ㅇ */

/* x const a = alert(prompt(' 첫번째 숫자', ''))
   x const b = (prompt('두 번째 숫자', ''))

 ㅇ const a = Number(prompt(' 첫번째 숫자', ''))
 ㅇ const b = Number(prompt('두 번째 숫자', ''))

  if ( a > b ) { 
    console.log(' 첫번째가 더큼')
  } else if (  a == b) {
    console.log(' 동일함')
  } else {
    console.log(' 두번째가 더큼')
  } 첫번째에 prompt로 받을 경우 무조건 문자열로 받게 
  되는데 넘버로 변환 시켜야 값의 차이를 알 수 있다 */

/*   if (x > 10) {
    if (x < 20) {
      console.log('조건에 맞습니다')
    }
  }

  if (x > 10 && x < 20) {
    console.log('조건에 맞습니다 ')
  } 논리 연산자 기억해 봅시다ㅏㅏ 실행   */
/* 
 x const a = Number(prompt('입력해')) 
 ㅇ const a = Number(prompt('입력해', ''))

 if (a > 0 ) {
  console.log(' 양수')
 } else if ( a === 0 ) {
  console.log(' 0임')
 } else {
  console.log(' 음수')
 } 실행 ㅇ */