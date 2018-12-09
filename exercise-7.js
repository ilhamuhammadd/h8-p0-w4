// Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.


function urutkanAbjad(str) {
    // you can only write your code here!
    tempArray = []
    for (var i = 0; i < str.length; i++) {
        tempArray.push(str[i])
    }
    tempArray.sort()
    tempString = ''
    for (var i = 0; i < tempArray.length; i++) {
        tempString += tempArray[i]
    }
    return tempString
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'