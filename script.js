const numberInput = document.querySelector('#number');
const outputText = document.querySelector('#output');
const convertButton = document.querySelector('#convert-btn');

function removeHidden() {
   if (outputText.classList.contains('hidden')) {
      outputText.classList.remove('hidden');
     }
}

function addOnes(num) {
   switch(num) {
         case '0':
            return '';
            

         case '1':
            return 'I';
             
 
          case '2':
             return 'II';
             
 
          case '3':
            return 'III';
             
 
          case '4':
            return 'IV';
             
 
          case '5':
            return 'V';
             
          case '6':
             return 'VI';
             
 
          case '7':
             return 'VII';
             
 
          case '8':
            return 'VIII';
             
 
          case '9':
            return 'IX';
             
              
        }
}

function addTens(num) {
   switch(num) {
      case '0':
         return '';
         

      case '1':
         return 'X';
          

       case '2':
          return 'XX';
          

       case '3':
         return 'XXX';
          

       case '4':
         return 'XL';
          

       case '5':
         return 'L';
          
       case '6':
          return 'LX';
          

       case '7':
          return 'LXX';
          

       case '8':
         return 'LXXX';
          

       case '9':
         return 'XC';
          
           
     }
}

function addHundreths(num) {
   switch(num) {
      case '0':
          return '';
      case '1':
          return 'C';
          

       case '2':
          return 'CC';
          

       case '3':
          return 'CCC';
          

       case '4':
          return 'CD';
          

       case '5':
          return 'D';
          
       case '6':
          return 'DC';
          

       case '7':
          return 'DCC';
          

       case '8':
          return 'DCCC';
          

       case '9':
          return 'CM';
          
           
     }
}

function addThousands(num) {
   switch(num) {
      case '1':
          return 'M';
          

       case '2':
          return 'MM';
          

       case '3':
          return 'MMM';
          
   }
}

function displayRomanNumber(num) {
       let result = '';
        const textNum = String(num);

        let splitValues;

       if (textNum.length === 1) {
        result+= addOnes(textNum);

      } else if (textNum.length === 2) {
        splitValues = textNum.split('');

        result += addTens(splitValues[0]);
        result += addOnes(splitValues[1]);


      } else if (textNum.length === 3) {
         splitValues = textNum.split('');

         result += addHundreths(splitValues[0]);
         result += addTens(splitValues[1]);
         result += addOnes(splitValues[2]);
      } else if (textNum.length === 4) {
         splitValues = textNum.split('');
         
         result += addThousands(splitValues[0]);
         result += addHundreths(splitValues[1]);
         result += addTens(splitValues[2]);
         result += addOnes(splitValues[3]);
        
      }

       
       removeHidden();
       
       outputText.textContent = result;

    }

   


convertButton.addEventListener('click', ()=> {

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

         displayRomanNumber(numberValue);
         
 }

})

