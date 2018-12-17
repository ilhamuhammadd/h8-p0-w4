// Logic Challenge - Password Generator
// Problem

// Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

// Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

//     Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

//     Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

//     Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

//     Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

// NOTE:

// Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga

function changeVocals(str) {
    //code di sini
    kamus = 'aeiouAEIOU'
    kamusubah = 'bfjpvBFJPV'
    temp = ''
    for (var i = 0; i < str.length; i++) {
        // console.log(str[i])
        sama = false
        for (var j = 0; j < kamus.length; j++) {
            // console.log(kamus[j])
            // console.log(str[i], '<<>>' ,kamus[j])
            if (str[i] === kamus[j]) {
                temp += kamusubah[j]
                sama = true
            }
        }
        if (sama === false) {
            temp += str[i]
        }

    }
    return temp
}

function reverseWord(str) {
    //code di sini
    var temp = ''
    for (var i = str.length - 1; i >= 0; i--) {
        temp += str[i]
    }
    return temp
}

function setLowerUpperCase(str) {
    //code di sini
    // console.log(str)
    temp = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase())  {
            // console.log(str[i] , '<>' , str[i].toUpperCase())
            temp += str[i].toLowerCase()
        } else if (str[i] === str[i].toLowerCase()) {
            temp += str[i].toUpperCase()
        }
    }
    return temp


}

function removeSpaces(str) {
    //code di sini
    // console.log(str.trim())
    temp = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            temp += str[i]
        }
    }
    return temp
}

function passwordGenerator(name) {
    //code di sini
    var hasilVocal = changeVocals(name)
    var hasilBalik = reverseWord(hasilVocal)
    var ubahBesarKecil = setLowerUpperCase(hasilBalik)
    var hapusSpasi = removeSpaces(ubahBesarKecil)
    return hapusSpasi
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator('Alexei')); // 'JFXFLb'
// console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

