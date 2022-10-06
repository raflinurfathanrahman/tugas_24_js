function tampung (){
    const angka = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];
    hasil = angka.join(',')
    console.log('Sebelumnya :',hasil);
    var data = angka.sort()
    console.log('Ascending :',data.join(','));
    var result = data.reverse();
    console.log('Descending :',result.join());
}
tampung()