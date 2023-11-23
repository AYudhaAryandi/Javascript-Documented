//forloop+mapping

const namaJajan =["chitato", "wafer", "coklat", "eskrim"]

for(let jajan = 0; jajan < namaJajan.length; jajan++){ //jajan++ maka akan di baca sama halnya jajan+1
    
    console.log(namaJajan[jajan]) //karna kita ingin ngemapping maka kita panggil variabel "jajan" 
}

// "=" pada bagian "for(let jajan = 0; jajan <= namaJajan.length; jajan++)" kita hilangkan agar output undifined nya tidak muncul, jadi yang akan terbaca hanya array yang ada di variabel "namaJajan"