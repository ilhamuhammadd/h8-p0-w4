// Logic Challenge - Total Digit (Rekursif)

// Diberikan sebuah function totalDigitRekursif(angka) yang menerima satu parameter berupa angka. Function akan me-return nilai total dari digit tersebut dengan menambahkan satu per satu angka dari digit paling depan ke paling belakang. Wajib menggunakan rekursif untuk berlatih rekursif! Disarankan untuk tidak menggunakan looping for untuk soal ini.

// Contoh:

// 512, berarti outputnya adalah 8, karena 5 + 1 + 2 = 8. 1542, berarti outputnya adalah 12, karena 1 + 5 + 4 + 2 = 12.


function totalDigitRekursif(angka) {
    // you can only write your code here!
    if (angka === 0 ) {
        return 0 
    }
    var arr = angka.toString()
    //   console.log(arr)
    

    var firstAngka = Number(arr[0])
    var sisaAngka = Number(arr.slice(1))
    // var sisa = Number(arr.slice(3))
    // console.log(typeof(firstAngka) )
    // console.log(typeof(sisaAngka))
    // console.log(firstAngka, sisaAngka, sisa)

    return firstAngka + totalDigitRekursif(sisaAngka)
    // return firstAngka + totalDigitRekursif(sisaAngka)
    
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5