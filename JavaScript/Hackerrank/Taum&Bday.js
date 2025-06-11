const taumBday = (b, w, bc, wc, z) => {
    
    // let conversionPrice, totalGiftPrice, allTotal
    // if( ((wc + z) < bc) || ((bc + z) < wc) ) {
    //     const totalGift = b + w
    //     if(((wc + z) < bc)) {
    //         conversionPrice = b * z
    //         totalGiftPrice = totalGift * wc
    //         allTotal = conversionPrice + totalGiftPrice
    //     } 
    //     if((bc + z) < wc) {
    //         conversionPrice = w * z
    //         totalGiftPrice = totalGift * bc
    //         allTotal = conversionPrice + totalGiftPrice
    //     }
    //     return allTotal
    // }
    // return (b * bc) + (w * wc)

    const costOfNoConversion = (b * bc) + (w * wc)

    const costOfConvertingToWhite = ((b + w) * wc) +  (b * z)

    const costOfConvertingToBlack = ((b + w) * bc) +  (w * z)

    return Math.min(costOfNoConversion, costOfConvertingToBlack, costOfConvertingToWhite)

}

console.log(taumBday(2,5,4,10,15))