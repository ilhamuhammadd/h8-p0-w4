function digitPerkalianMinimum(angka) {
    var temp = []
    for (var i = 0; i <= angka; i++) {
        if (angka % i === 0) {
            // console.log(angka / i, i)
            var str = angka / i
            var strI = i
            var arr = String(str) + String(i)
            temp.push(arr)
        }
    }
    var minLength = temp[0].length
    for (var j = 0; j < temp.length; j++) {
        // console.log(temp[j])
        if (temp[j].length < minLength) {
            minLength = temp[j].length
        }
    }
    return minLength
  
}


// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2