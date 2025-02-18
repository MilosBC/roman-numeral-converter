const numberInput = document.querySelector('#number');
const outputText = document.querySelector('#output');
const convertButton = document.querySelector('#convert-btn');
let result = '';

function removeHidden() {
   if (outputText.classList.contains('hidden')) {
      outputText.classList.remove('hidden');
     }
}

function displayRomanNumber(num) {
       // let result = '';
        const textNum = String(num);

        let splitValues;

       if (textNum.length === 1) {
       switch(textNum) {
        case '1':
            result += 'I';
            break;

         case '2':
            result += 'II';
            break;

         case '3':
            result += 'III';
            break;

         case '4':
            result += 'IV';
            break;

         case '5':
            result += 'V';
            break;
         case '6':
            result += 'VI';
            break;

         case '7':
            result += 'VII';
            break;

         case '8':
            result += 'VIII';
            break;

         case '9':
            result += 'IX';
            break;
             
       }

      } else if (textNum.length === 2) {
        splitValues = textNum.split('');

        console.log('prvi', typeof splitValues[0]);
        console.log('drugi', typeof splitValues[1]);

        switch(splitValues[0]) {
         case '1':
             result += 'X';
             break;
 
          case '2':
             result += 'XX';
             break;
 
          case '3':
             result += 'XXX';
             break;
 
          case '4':
             result += 'XL';
             break;
 
          case '5':
             result += 'L';
             break;
          case '6':
             result += 'LX';
             break;
 
          case '7':
             result += 'LXX';
             break;
 
          case '8':
             result += 'LXXX';
             break;
 
          case '9':
             result += 'XC';
             break;
              
        }

        switch(splitValues[1]) {
         case '0':
            result += '';
            break;

         case '1':
             result += 'I';
             break;
 
          case '2':
             result += 'II';
             break;
 
          case '3':
             result += 'III';
             break;
 
          case '4':
             result += 'IV';
             break;
 
          case '5':
             result += 'V';
             break;
          case '6':
             result += 'VI';
             break;
 
          case '7':
             result += 'VII';
             break;
 
          case '8':
             result += 'VIII';
             break;
 
          case '9':
             result += 'IX';
             break;
              
        }


      }

       
       removeHidden();
       
       outputText.textContent = result;

    }

   


convertButton.addEventListener('click', ()=> {

if (numberInput.value.includes('+')) {
        numberInput.value.replace(/[+]/g, '');
        console.log( typeof numberInput.value);
        console.log(numberInput.value);
}
const numberValue = Number(numberInput.value);
console.log(numberValue);

 

 if (!numberInput.value) {
    
    removeHidden();
    outputText.textContent = 'Invalid input, enter a proper value!';
 } else if (numberValue <= 0 || numberValue > 3999 || !Number.isInteger(numberValue)) {
    removeHidden();
    outputText.textContent = 'Enter the number between 0 and 3999!';

 } else {
        
         removeHidden();
          result = '';

        /* if (numberInput.value.length === 1) {
                addOnes(numberValue);
         } else if (numberInput.value.length === 2) {
                addTwos(numberInput.value);
         }    */

         displayRomanNumber(numberValue);
         
 }

})

