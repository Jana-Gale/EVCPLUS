export function slambank() {

    let balance = 300;
    let acoun = 2233445566;
    let slam_bank = prompt('Salaam Bank\n1.Kawareeji EVCPlus')
    if (slam_bank == 1) {
        let select_bank_name = prompt('Fadlan dooro xisaabta Bangiga\n1. SALAM SOMALI BANK\n2. Daarasalaam Bank\n3. Bank Beeraha\n4. Salaam sch')

        if (select_bank_name == 1 || select_bank_name == 2) {
            let acount = prompt('Fadlan Gali Acount-ka')
            if (acount == acoun) {
                let money = prompt('Fadlan Gali lacagta')
                if (money <= balance) {
                    alert(`Waxaad kudirtay $${money}  (JANA-GALE BANK) ${acoun} Haraagaagu waa $${balance-money}`)

                } else {
                    alert('Haraaga xisaabtaadu kugama filno')
                }


            } else { alert('Fadlan acoun saxan soogali') }



        } else { alert('This action could not be completed still.') }
    } else { alert("invalid number") }


}