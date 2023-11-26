const problema = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"

function compiler(code){
    let conteo = 0
    let cadena = code.split("")
    let almacen = [];
    cadena.forEach(elemento =>{
        if (elemento == "#"){
            conteo += 1
            
        } else if (elemento == "@"){
            conteo -= 1
            
        } else if (elemento == "*"){
            conteo = conteo * conteo
            
        } else if (elemento == "&"){
            almacen.push(conteo)
        }
        
    })
    const resultado = almacen.join("");
    return resultado
}
console.log(compiler(problema))





/* Input Examples: **

The operations of the language are as follows:

"#" Increases the numeric value by 1.
"@" Decreases the numeric value by 1.
"*" Multiplies the numeric value by itself.
"&" Prints the current numeric value.

Input: "##*&"
Expected Output: "4"
Explanation: Increment (1), increment (2), multiply (4), print (4).

Input: "&##&*&@&"
Expected Output: "0243"
Explanation: Print (0), increment (1), increment (2), print (2), multiply (4), print (4), decrement (3), print (3).
*/ 
