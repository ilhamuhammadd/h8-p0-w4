function ubahHuruf(kata) {
    // you can only write your code here!
    result = []
    temp = ''
    kamus = 'abcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < kata.length; i++) {
        // console.log(kata[i])
        result.push(kata[i])
        for (var j = 0; j < kamus.length; j++) {
            if (result[i] === kamus[j]) {
               temp += kamus[j+1]
            }
        }
    }
    return temp
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
//   console.log(ubahHuruf('developer')); // efwfmpqfs
//   console.log(ubahHuruf('javascript')); // kbwbtdsjqu
//   console.log(ubahHuruf('keren')); // lfsfo
//   console.log(ubahHuruf('semangat')); // tfnbohbu