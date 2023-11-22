let nama = "Akhmad Yudha Aryandi"
let umur = 20 
let tinggiBadan = 178
let beratBadan =70
let halFavorit = 2


switch(halFavorit){
    case 1:         //case artinya kondisi yang harus dipenuhi
        halFavorit = "tidur"        //halFavorit adalah statement atau statement
        break       //break adalah untuk menghentikan kondisi
    case 2:
        halFavorit = "makan dan tidur"
        break
    default:        //adalah nilai akhir ketika tidak ada value yang terisi
        halFavorit = "ga ada"
        break
}

//ketika case=1 maka akan keluar output "tidur" karna di "halFavorit" statement nya bervalue 1 
//ketika case=2 maka akan keluar output "makan dan tidur"  karna di "halFavorit" statement nya bervalue 2
//defaultnya jika salah satu dari value case tidak sesuai dengan yang dibuat, maka akan keluar output "ga ada"

alert(`nama saya adalah ${nama} umur saya ${umur} Tinggi badan saya ${tinggiBadan} berat badan saya ${beratBadan} hal favorit saya yaitu ${halFavorit}`);


