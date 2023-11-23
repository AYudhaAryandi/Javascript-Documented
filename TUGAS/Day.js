var Days = [ "minggu", "senin", "selasa", "rabu", "kamis", "jumat", "sabtu"]; 
let namaHari = new Date()
let hari=Days[namaHari.getDay()]
alert (`hari ini adalah ${hari}`)