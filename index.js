let generateBtn       = document.getElementById('generateBtn');
let generatedPassword = document.getElementById('generatedPassword');
let copyToClipboard   = document.getElementById('copyBtn');

//  hardcoded from ascii table
 const numberLimits        = {min: 48, max: 57};
 const letterLimits        = {min: 97, max: 122};
 const symbolLimits        = {min: 33, max: 47};
 const capitalLetterLimits = {min: 65, max: 90};

function getRandomIntFromInterval (min, max){
   return Math.floor(Math.random()*(max - min + 1) + min)
}

function createArrayFromInterval (params) {
    var {max, min} = params;
    var arr = [];
    var arrayLength = (max - min);
    for (let i = 0; i <= arrayLength; i++){
        arr.push(min + i);
    }
    return arr;
}

generateBtn.addEventListener('click', ()=> {

    let passwordLength        = document.getElementById('passwordLength').value;
    let includeNumbers        = document.getElementById('includeNumbers').checked;
    let includeCapitalLetters = document.getElementById('includeCapitalLetters').checked;  
    let includeSymbols        = document.getElementById('includeSymbols').checked; 

    let totalArrayOfChosenElements = [];

    var tmp = createArrayFromInterval(letterLimits);
    totalArrayOfChosenElements = totalArrayOfChosenElements.concat(tmp) 

    if (includeNumbers) {
        var tmp = createArrayFromInterval(numberLimits);
        totalArrayOfChosenElements = totalArrayOfChosenElements.concat(tmp) 
    }

    if (includeCapitalLetters) {
        var tmp = createArrayFromInterval(capitalLetterLimits);
        totalArrayOfChosenElements = totalArrayOfChosenElements.concat(tmp) 
    }

    if (includeSymbols) {
        var tmp = createArrayFromInterval(symbolLimits);
        totalArrayOfChosenElements = totalArrayOfChosenElements.concat(tmp)
    }

    var max = Math.max(...totalArrayOfChosenElements);
    var min = Math.min(...totalArrayOfChosenElements);
    var password = '';

    for (let i = 0; i < passwordLength; i++){
        var randomNumber = getRandomIntFromInterval(min, max);
        password = password + String.fromCharCode(randomNumber);                
    }
    generatedPassword.innerText = password;
})

copyToClipboard.addEventListener('click', ()=> {
    generatedPassword.focus();
    generatedPassword.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
      } catch (err) {
        console.log('Oops, unable to copy');
      }


})