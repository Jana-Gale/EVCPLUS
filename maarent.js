export function Maareynta() {
    let pin = 5555

    let change_mareynt = prompt('Maareynta\n1. Bedel lambarka sirta ah\
    \n2. Bedel Luuqada\n3. Wareejin Mobile Lumay\n4. Lacag xirasho\n5. U celi lacag qaldantay\
    \n6. EnableMobileBanking')

    if (change_mareynt == 1) {
        let new_pin = prompt('Fadlan Gali PIN-kaaga cusub')
        if (new_pin >= 1111 && new_pin <= 9999) {
            let cornfirm = prompt('Fadlan Gali PIN-kaaga cusub Mar kale')
            if (new_pin == cornfirm) {
                alert('Waad kuguuleysatay inaad PIN-kaaga badashid')

            } else {
                alert('Kumaadan kuuleeysan inaad PIN_kaaga badashid')
            }
        } else { alert('PIN-kaaga xadki loogutalagay wuu dhaafay') }


    } else if (change_mareynt == 2) {
        let languages = prompt('Fadlan luuqad dooro\n1. Somali\n2.English')
        if (languages == 1 || languages == 2) {
            alert("Waad kuguuleysay inaad  badasho luuqada ")

        } else { alert('invali number') }
    } else { alert("This action could not be completed still.") }


}