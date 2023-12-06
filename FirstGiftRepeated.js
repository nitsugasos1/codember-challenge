function findFirstRepeated(gifts) {
    let elmayor = 0
    let contAct = {}
    for (let i = 0; i < gifts.length; i++) {
        const key = gifts[i]
        console.log(contAct)
        if (contAct[key] === undefined) {
            contAct[key] = 1;
            
        } else {
            contAct[key]++
            if (contAct[key] >= 2) {
                elmayor = key
                return key
            }
        }
    }
    
    return -1
}
const giftIds = [2, 2]  
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId)





