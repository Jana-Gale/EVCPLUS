import { slambank } from "./salaam.js";
import { Maareynta } from "./maarent.js";
import { taaj } from "./TAAJ.js";


let pin = 5555;
let blance = 300;
let mobile = 252612354790;



//

let pin_evc = prompt('-EVCPLUS-\n Fadlan gali Pinkaaga (Enter Pin)')

//valid pin
if (pin_evc == pin) {
    let services = prompt("EVCPLUS\n 1. itus Haraaga \n 2. kaarka hadalka \n 3. Bixi Bill \n4. U wareeji EVCPlus  \n5. Warbixin kooban \n6. Salaam Bank \n 7. Maareynta \n 8. TAAJ \n 0. Kabax")

    //servise 1 itust haraga
    if (services == 1) {
        alert(`<-EVCPlus-> Haraagaagu waa ${blance}$`)

    } //kaarka hadalka 2
    else if (services == 2) {
        let kaarka_hadalka = prompt("Kaarka hadalka \n1. Ku Shubo Airtime \n2. Ugu Shub Airtime ")

        //valid select kaarka hadalka
        //kaarka hadalka part1
        if (kaarka_hadalka == 1) {
            let money = prompt("Fadlan Gali lacagta \n")
                //hubi lacagta
            let valid_money = prompt(`Ma hubtaa inaad $ ${money} ugu shubtay undefined ?\n1.Haa \n2.Maya`)
            if (valid_money == 1) {
                if (money <= blance) {
                    //lacag saxaa hadeey tahay
                    alert(`<-EVCPlus-> Waxaad $${money} ugushubtay \n ${mobile} , Haraagaagu waa $${blance-money}.
                    20 sano oo adeeg bulsho`)


                } else { alert('Haraaga xisaabtaadu kuguma filno') } // lacag kabadan haragisa

            } else { alert('Mahadsanid') }



        }

        //kaarka hadalka part2
        else if (kaarka_hadalka == 2) {
            let your_mobile = prompt("Fadlan Geli Mobile-ka")
            if (your_mobile >= 610000000 && your_mobile <= 619999999) {
                let lacag = prompt("Fadlan Gali Lacagta")
                let hubi_lacagta = prompt(`Ma hubtaa inaad $${lacag} ugushubtid\n ${your_mobile} \n1.Haa\n2.Maya`)

                //hubi_lacagta haraga userka
                if (hubi_lacagta == 1) {
                    if (lacag <= blance) {
                        alert(`<-EVCPlus-> Waxaad $${lacag} ugushubtay \n ${your_mobile} , Haraagaagu waa $${blance-lacag}.`)

                    } else(alert("Haraaga xisataadu kuguma filno  "))


                } else { alert('Mahadsanid. Macsalamo') } //maya 2

            } else { alert('Fadlan Mobile saxa ah soogali') }




        } else { alert('Invalid Number') }





    }




    ///servicess part 3  Bixi Bill
    else if (services == 3) {
        let Bixi_BILL = prompt('Bixi Bill\n1. Post Paid\n2. Ku Iibso')
        if (Bixi_BILL == 1 || Bixi_BILL == 2) {
            alert("Ohh! sorry  you must have an acount. :")

        }


    }



    ///servicess part 4  Uwareji evcplus
    else if (services == 4) {
        let your_mobile = prompt("Fadlan Geli Mobile-ka")
        if (your_mobile >= 610000000 && your_mobile <= 619999999) {
            let lacag = prompt("Fadlan Gali Lacagta")
            let hubi_lacagta = prompt(`Ma hubtaa inaad $${lacag} uwareejisay\n ${your_mobile} \n1.Haa\n2.Maya`)

            //hubi_lacagta haraga userka
            if (hubi_lacagta == 1) {
                if (lacag <= blance) {
                    alert(`<-EVCPlus-> Waxaad $${lacag} Uwareejisay \n ${your_mobile} , Haraagaagu waa $${blance-lacag}.`)

                } else(alert("Haraaga xisataadu kuguma filno  "))


            } else { alert('Mahadsanid. Macsalamo') } //maya 2

        } else { alert('Fadlan Mobile saxa ah soogali') }




    }




    ///servicess part 5  Warbixin kooban
    else if (services == 5) {
        let warbixin = prompt('Warbixin Kooban \n1. Last Action\n2. Wereejintii u danbeeysay\n3. Iibsashadii Udanbeysay\n4. Last 3 Actions\n5. Email me My Activity')
        if (warbixin == 1) {
            let lacag = 5;
            alert(`<-EVCPlus-> Waxaad $${lacag} ugushubtay \n ${mobile} , Haraagaagu waa $${blance-lacag}.`)

        } else if (warbixin == 2) {
            let lacag = 10;
            let mobile = 252615106290
            alert(`<-EVCPlus-> Waxaad $${lacag} Uwareejisay \n ${mobile} , Haraagaagu waa $${blance-lacag}.`)


        } else { alert('This action could not be completed still.') }

    }

    ///servicess part 6  Salaam bank
    else if (services == 6) {
        slambank()

    }

    /////servicess part 7  Maareynta
    else if (services == 7) {
        Maareynta()

    }

    ///servicess part 8  TAAJ
    else if (services == 8) {
        taaj()

    }
    ///servicess Last part 0  Kabax
    else if (services == 0) {
        alert("Macsalaamo. Mahadsanid")
    } else { alert("Fadlan dooro number sax ah") } //range out number services








} else { alert('<-EVCPLUS-> Numberka sirta ah waa khalad') }