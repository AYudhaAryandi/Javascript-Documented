//di dalam array ("[]")itu bisa menampung banyak nilai tak terbatas

let namaJajan = ["chitato", "eskrim", "coklat"]; //sebagai contoh yang bernilai string

namaJajan.push("wafer", "pie"); //"push ini bertujuan untuk menambah nilai array"

namaJajan.shift()// yang bertujuan menghapus index pertama yaitu "chitato"

namaJajan.pop(); //yang bertujuan menghapus index terakhir yaitu "pie"

alert(namaJajan);
// untuk mengeluarkan hasil kita pakai alert, bisa juga pake console.log (sesuai yang di butuhkan), maka akan keluar output  "'chitato', 'eskrim', 'coklat'"  ketika ingin memunculkan salah satu di dalam array tersebut bisa kita ketik

// alert (namaJajan [0]) // maka akan keluar output "chitato "
// kenapa nol? karena index itu selalu di mulai dari 0 jadi ketika ? 'chitato' adalah nol maka eskrim bernilai 1 dan coklat bernilai 2

//ketika kita masukan ".push" maka akan mengeluarkan output ("chitato,eskrim,coklat,wafer,pie") kenapa bertambah menjadi 5 value? karena sudah menambahkan "wafer,pie" ke dalam array yang kita isi pertama

//jika kita memakai .shift maka akan keluar output ("eskrim,coklat,wafer ,pie")
//jika kita memakai .pop maka akan keluar output ("chitato,eskrim,coklat,wafer")
