// di sini saya ingin melakukan conditional (pengkondisian) agar "let halFavorit " tidak berisi null tetapi menggunakan pengkondisian

let nama = "Akhmad Yudha Aryandi"
let umur = 20 
let tinggiBadan = 178
let beratBadan =70
let halFavorit = "isi"


if (halFavorit == null) {
    halFavorit = " tidak ada"
} else {
    halFavorit = "tidur"
}

alert(`nama saya adalah ${nama} umur saya ${umur} Tinggi badan saya ${tinggiBadan} berat badan saya ${beratBadan} hal favorit saya yaitu ${halFavorit}`);


// pengkondisian if else yang dimana bisa di baca "if(jika) halFavorit null maka akan keluar (hal favorit saya tidak ada) dan else (selain dari) kondisi yang pertama atau selain null maka akan keluar (hal favorit saya tidur)"

//untuk mengganti output agar tidak keluar output "tidak ada" maka bisa ganti variabel "let halFavorit =null" menjadi "let halFavorit ="isi" untuk contoh memakai "isi" pada nilai variabel


