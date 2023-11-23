let SaldoAwal = Number (prompt("masukan saldo awal"));
let SaldoTambah =Number (prompt("saldo yang akan di tambahkan"))
const jumlah = SaldoAwal+SaldoTambah
alert(`saldo kamu sebesar ${jumlah}`)

//kenapa di tambahkan "Number"?, karena prompt akan secara default mendetect bahwa itu text atau string, dan gunanya "Number" pada sebelum prompt bertujuan untuk mendetect bahwa itu adalah int atau nomer