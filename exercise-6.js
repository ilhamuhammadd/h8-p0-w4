// Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.
/*
24*1
1*12

*/

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    tempAngka = []
    tempIndex = []
    for (var i = 0; i < angka; i++) {
        if (angka % i === 0) {
            console.log(angka / i, '*', i)
            var strAngka = angka / i
            tempAngka.push(String(strAngka))
            var strI = i
            tempIndex.push(String(strI))

        }
    }
    
    // console.log(tempAngka)
    // console.log(tempIndex)
    // console.log(typeof(tempAngka))
    flag = false
    for (var i = 0; i < tempAngka.length; i++) {
        console.log(tempAngka[i] , '=>' , tempAngka[i].length)
        // console.log(tempIndex[i] , '=>' , tempIndex[i].length)
        
        if (tempAngka[i].length === 1 && tempIndex[i].length === 1 ) {
            console.log('hello if atas')
            console.log(tempAngka[i].length + tempIndex[i].length)
            return tempAngka[i].length + tempIndex[i].length
        } else if (tempAngka[i].length === 2) {
            console.log(tempAngka[i].length + tempIndex[i].length)
            return tempAngka[i].length + tempIndex[i].length
        }
        // else if (tempAngka[i].length > 1 && tempIndex[i].length === 1) {
        //     console.log('hello if bawah')
        //     return tempAngka[i].length + tempIndex[i].length
        // }
        // console.log(tempAngka[i].length === 1 , tempAngka[i]) 
    }
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2