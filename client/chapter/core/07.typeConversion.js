/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2024;

console.log(typeof String(YEAR));
console.log(typeof (YEAR+''));

// undefined, null
let days = null;
console.log(days + '');

let friends;
console.log(friends+'');

// boolean
let isClicked = true;
console.log(String(isClicked));


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));

// null
let money = null;
console.log(Number(money));

// boolean
let isMarried = false;
console.log(Number(isMarried));

// string
let num = '100';
console.log(Number(num));
console.log(typeof(num*1));
console.log(num/1);
console.log(typeof(+num));

// numeric string
const width = '120.5px';
console.log(Number(width));
console.log(parseFloat(width, 10));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(friend));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(' '));
console.log(Boolean('0'));