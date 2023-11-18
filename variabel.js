// implementasi biasa
var jajan = 2000
const jajan = 2000
let jajan = 2000
console.log("harga jajan itu adalah" +jajan);


//NOTE!!!!

// "var" dan "let" itu hampir sama, yang nilainya bisa berubah ubah sesuai berapa nilai variabel 
// "const" itu untuk menyimpan data yang tidak akan berubah atau bersifat constant
// kita dapat menggunakan kata kunci let dan const di dalam function, namun ketika menggun
// akannya di luar function maka kedua-duanya memiliki scope global
// di javascript, variable yang terdapat pada lingkungan global (tidak termasuk dalam fungsi)
// var dan let itu bersifat interpreter yang di mana data di tentukan berdasarkan nama variabel




// contoh interpreted
// let jajan = 2000
// var jajan =2000
// jajan=3000
// console.log("harganya " +jajan); //var dan let itu sama!!! maka akan muncul "harganya 3000" karna akan mengeksekusi variabel yang terakhir

// const jajan =2000
// jajan 3000
// console.log("harganya" +jajan);// maka akan muncul "Uncaught SyntaxError: Unexpected number (at variabel.js:25:7)" karena const itu nilainya pasti dan tidak bisa di ubah



//oke mari coba dengan pengimplementasian ddengan alert
let jajan =2000
console.log("harga jajan" +jajan); //selalu sertakan nama variabel jika ingin muncul valuenya
alert( "harga jajan yang kamu beli " +jajan)

