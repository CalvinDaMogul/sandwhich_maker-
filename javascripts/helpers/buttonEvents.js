// import makeSub from '../components/store.js';
import bread from './bread.js';


const makeSub = ()=> {
    console.log('makeSub');
    var boxes = Array.from( document.getElementsByClassName('form-check-input position-static'));
    let sandwich = [];
    let total = 0.0;
    boxes.forEach(function(box) {
        if(box.checked) {
           sandwich.push(box.value)
        };
 


      })
      sandwich.forEach(itemPrice => {
        total = total + parseFloat(itemPrice);
    });
  total = parseInt(total*100)/100;
      console.log('total='+ total);
      document.getElementById("answerbox").value=total;
      return total;
    }

const submitButton = () => {
console.log('submitBtn');
    document.getElementById('submitBtn').addEventListener('click', makeSub);

}

export default { submitButton };