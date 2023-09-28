export function taaj() {
    let Taaj = prompt('TAAJ\n1. Dibadda\n2. ogoow Khidmada\n3. Macluumaadka xawaalada')
    if (Taaj == 1) {
        let user_mobil = prompt('Fadlan Gali Taleenfanka qaataha')
        alert('Qaatahaan ma diwaan galsano.')

    } else if (Taaj == 2) {
        let qidmada = prompt('Fadlan dooro shirkada\n1. PAY TO EVCPLUS TMT \n2. TAAJ\n3. TaajPay\n4 New Etaaj\n5. TAAJIPS ')
        if (qidmada == 1 || qidmada == 2 || qidmada == 3 || qidmada == 4 || qidmada == 5) {
            alert("This action could not be completed still.")

        } else { alert('invalid number') }


    } else if (Taaj == 3) {
        alert("Mahadsanid macaamiilkeena sharafta badan.")

    } else {
        alert('invalid number')
    }
}