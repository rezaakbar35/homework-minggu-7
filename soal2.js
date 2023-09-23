//pertama kita definiskan terlebih dahulu tentang fs
const fs = require('fs')

//selanjutnya adalah membaca soal, yaitu homework.log
fs.readFile('homework.log', 'utf-8', (err, data) => {
    if (err) {console.error(err)};
    
    console.log("Data Sucessfully read! here is the data :" + data)
    //disini kita akan melempar jika error maka akan menunjukkan error, namun jika berhasil maka akan menulis data ke dalam log.txt
    fs.writeFile('log.txt', data, (err, ) => {
        if (err) {console.error(err)};
        console.log("Data Sucessfully wrote!");
    });
})
