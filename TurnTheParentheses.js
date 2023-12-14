
function decode(message) {
    // Code here


    let mes = message.match(/\(\w*\)/g)
    if(!mes) return message
    let ready = mes[0].slice(1, -1).split("").reverse().join("")
    let finaly = message.replace(mes[0],ready)
   
    console.log(finaly)
    return decode(finaly)
   

    //detectar los parentesis
    //hacer que el contenido te los separe en arrays
    // reverse and join
    
}

console.log(decode('sa(u(cla)atn)s'))