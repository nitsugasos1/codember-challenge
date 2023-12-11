
function findNaughtyStep(original, modified) {
   
    let arrOriginal = original.split("")
    let arrModified = modified.split("")
    
  	let arrLargo = []
  	let arrCorto = []
	
  	if(arrModified.length > arrOriginal.length){
      arrLargo = arrModified
      arrCorto = arrOriginal
    } else if (arrModified.length < arrOriginal.length) {
      arrLargo = arrOriginal
      arrCorto = arrModified
    } else if (arrModified.length === arrOriginal.length) {
      return ""
    }
  
    const result = arrLargo.filter((word, i)=>(word !== arrCorto[i]));
    const resultString = result[0][0];
    const final = resultString
    return final
  }


  const original = 'stepfor'
  const modified = 'stepor'
  console.log(findNaughtyStep(original, modified))