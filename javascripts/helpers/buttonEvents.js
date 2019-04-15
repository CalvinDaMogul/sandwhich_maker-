// import makeSub from '../components/store.js';
import bread from './bread.js';



const getTotalPrice = () => {
    let total = 0.0;
    sandwich.forEach(itemPrice => {
        total = total + parseFloat(itemPrice);
    });
  total = parseInt(total*100)/100;
  return total;
}


let sandwich = [];
const makeSub = ()=> {
    console.log('makeSub');
    var boxes = Array.from( document.getElementsByClassName('form-check-input position-static'));
    boxes.forEach(function(box) {
        if(box.checked) {
           sandwich.push(box.value)
        };
 


      })
      let sandwichTotal = getTotalPrice();
      showTotal(sandwichTotal);
    }

   
    const showTotal = (total) => {
        document.getElementById("answerbox").value=total;

    };

const submitButton = () => {
console.log('submitBtn');
    document.getElementById('submitBtn').addEventListener('click', makeSub);

}

export default { submitButton };