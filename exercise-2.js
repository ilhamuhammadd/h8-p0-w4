// function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.


function fpb(angka1, angka2) {
    var temp1 = []
    var temp2 = []
    // you can only write your code here!
    for (var i = 1; i <= angka1; i++) {
        if (angka1 % i == 0) {
            temp1.push(angka1 / i)
            // console.log(temp1)
        }

    }
    for (var j = 1; j <= angka2; j++) {
        if (angka2 % j == 0) {
            temp2.push(angka2 / j)
            // console.log(temp2)
        }
    }
    var result = 0
    for (var i = temp1.length-1; i >= 0; i--) {
        for (var j = temp2.length-1; j >= 0; j--) {
            // console.log(temp1[i] + '<<>>' + temp2[j] )
            if (temp1[i] === temp2[j]) {
                result = temp1[i]
            }
        }
    }
return result

}

// TEST CASES
console.log(fpb(12, 16)); // 4
// console.log(fpb(50, 40)); // 10
// console.log(fpb(22, 99)); // 11
// console.log(fpb(24, 36)); // 12
// console.log(fpb(17, 23)); // 1