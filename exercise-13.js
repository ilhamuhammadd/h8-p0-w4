// Logic Challenge - Most Frequent Largest Numbers
// Problem

// Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

// Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!

function sorting(arrNumber) {
    // code di sini
    var sort = arrNumber.sort()
    return sort
}

function getTotal(listSort) {
    // code di sini
    counter = 0
    flag = false
    for (var i = 0; i < listSort.length; i++) {
        //    console.log(sort[i])
        if (listSort[i] === listSort[listSort.length - 1]) {
            counter += 1
            flag = true
        }
    }
    // if (flag === true) {
    //     return 'angka paling besar adalah ' + sort[sort.length - 1] + ' dan jumlah kemunculan sebanyak ' + counter + ' kali'
    // } else {
    //     return ''
    // }
    return counter
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    if (flag === true) {
        return 'angka paling besar adalah ' + listSort[listSort.length - 1] + ' dan jumlah kemuculan sebanyak ' + countHighest;
    } else {
        return ' '
    }
    
   
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
// //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
// //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''