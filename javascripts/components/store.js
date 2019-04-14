// import order from './orderBuilder.js';
import bread from '../helpers/bread.js';
import util from '../helpers/util.js';


const makeSub = ()=> {
    console.log('makeSub');
    var boxes = Array.from( document.getElementsByClassName('form-check-input position-static'));
    let sandwich = [];
    boxes.forEach(function(box) {
        if(box.checked) {
           sandwich.push(box.value)
        };
        let total = 0;
        sandwich.forEach(itemPrice => {
            total = total + parseFloat(itemPrice);
        });
        console.log('total='+ total);
       return total;

      })
}

const buyEvent = (e) => {
        e.preventDefault();
        const myCart = makeSub();
        const total = makeSub()  //reduce((a, b) => {return a + b.price}, 0);
    };
    




export default { makeSub };

// listen for click on checkout
// find all the checkboxes
// loop over find ones that are checked
// if checked add to sandwich
// get total of ingredient
// print