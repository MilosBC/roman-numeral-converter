const numberInput = document.querySelector('#number');
const outputText = document.querySelector('#output');
const convertButton = document.querySelector('#convert-btn');

convertButton.addEventListener('click', ()=> {

if (numberInput.value.includes('+')) {
        numberInput.value.replace(/[+]/g, '');
        console.log( typeof numberInput.value);
        console.log(numberInput.value);
}
const numberValue = Number(numberInput.value);
console.log(numberValue);

    function addOnes(num) {
        let result = '';
       switch(num) {
        case 1:
            result += 'I';
            break;

         case 2:
            result += 'II';
            break;

         case 3:
            result += 'III';
            break;

         case 4:
            result += 'IV';
            break;

         case 5:
            result += 'V';
            break;
         case 6:
            result += 'VI';
            break;

         case 7:
            result += 'VII';
            break;

         case 8:
            result += 'VIII';
            break;

         case 9:
            result += 'IX';
            break;
             
       }
      if (outputText.classList.contains('hidden')) {
       outputText.classList.remove('hidden');
      }
       
       outputText.textContent = result;

    }

 if (!numberInput.value) {
    
        if (outputText.classList.contains('hidden')) {
         outputText.classList.remove('hidden');
               }
    outputText.textContent = 'Invalid input, enter a proper value!';
 } else if (numberValue < 0 || numberValue > 3999 || !Number.isInteger(numberValue)) {
        if (outputText.classList.contains('hidden')) {
            outputText.classList.remove('hidden');
               };
    outputText.textContent = 'Enter the number between 0 and 3999!';

 } else {
        
        if (outputText.classList.contains('hidden')) {
            outputText.classList.remove('hidden');
               }
    addOnes(numberValue);
 }

})

