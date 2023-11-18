let nama = "Akhmad Yudha Aryandi"
let umur = 20 
let tinggiBadan = 178
let beratBadan =70
let halFavorit = 2


switch(halFavorit){
    case 1:
        halFavorit = "tidur"
        break
    case 2:
        halFavorit = "makan dan tidur"
        break
    default:
        halFavorit = "ga ada"
        break
}

alert(`nama saya adalah ${nama} umur saya ${umur} Tinggi badan saya ${tinggiBadan} berat badan saya ${beratBadan} hal favorit saya yaitu ${halFavorit}`);