const repeatString = function(string,num) {

    let frase= "";
    
    if (num >= 0){
    for (let i = 0; i<num;i++){
       frase = frase + string
    }
    return frase;
    }
    else{
        return "ERROR";
    }
}
   
// Do not edit below this line
module.exports = repeatString;
