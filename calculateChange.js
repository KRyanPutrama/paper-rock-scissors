const calculate = (pay, total) => {
    if (pay < total) {
        return 'not enough money'
    }
    let kembalian = pay - total
    const lembar = ['50000', '20000','10000','5000','1000']
    let pos = 0
    const satuan = {'50000' : 0, '20000' : 0, '10000': 0, '5000': 0, '1000' : 0}
    while(kembalian > 0) {
        if (kembalian >= lembar[pos]) {
            satuan[lembar[pos]] += 1
            kembalian -= lembar[pos]
            console.log(kembalian)
        } else {
            pos += 1
        }
    }
    return satuan
}

console.log(calculate(275000, 100000))