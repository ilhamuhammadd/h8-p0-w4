// Logic Challenge - Check AB

// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false.


function checkAB(num) {
  // you can only write your code here!
  tempa = ''
  tempb = ''
  for (var i = 0; i < num.length; i++) {
    // console.log(num[i] , '=>' , i)
    if (num[i] === 'a') {
      // console.log(i)
      tempa = i
    } else if (num[i] === 'b') {
      // console.log(i)
      tempb = i
    }
  }
  // console.log(tempa)
  // console.log(tempb)
  if (tempa < tempb || !tempa || !tempb) {
    if (tempb - tempa === 4) {
      return true 
    } else {
      return false
    }
  } else {
    if (tempa - tempb === 4) {
      return true
    } else {
      return false
    }
  }
  
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false