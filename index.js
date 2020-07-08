function noSpace (str){
    let array = [];

    for(let i = 0; i < str.length;i++){
        if (str[i]!=' ')array.push(str[i]);
    }
    return noSpaceWord = array.join('')
}

function reves(str2){    
    return reversed2 = str2.split('').reverse().join('')
     
}


function validar(a, b){
    if (a == b){
        console.log('palindromo')
    } else {
        console.log('no palimdromo')
    }
}

var palabra = prompt('dame una palabra')
noSpace(palabra)
reves(noSpaceWord)
validar(noSpaceWord, reversed2)
console.log(noSpaceWord, reversed2)