const weight = document.getElementById('weight');
const height = document.getElementById('height');
let rusult = document.getElementById('result');

function calculate(){
  let heightValue = height.value / 100;
  const calculation = weight.value / (heightValue * heightValue)
  
  if(calculation < 16){
    result.innerHTML = `${calculation.toFixed(2)} (Severe thinness)`
    result.classList ='severe-thinness'
    result.classList = 'mild-thiness'
  } else if(calculation > 15 && calculation < 18){
    result.innerHTML= `${calculation.toFixed(2)} (Moderate thinness)`
    result.classList = 'mild-thiness'
  } else if(calculation > 16 && calculation < 18.6){
    result.innerHTML = `${calculation.toFixed(2)} (Mild thinness)`
    result.classList = 'mild-thiness'
  } else if(calculation > 18.4 && calculation <25){
    result.innerHTML = `${calculation.toFixed(2)} (Normal)`
    result.classList = 'normal'
  } else if(calculation > 24.9 && calculation  < 31){
    result.innerHTML = `${calculation.toFixed(2)} (Over weight)`
    result.classList = 'overweight';
  } else if(calculation > 29.9 && calculation < 36){
    result.innerHTML = `${calculation.toFixed(2)} (Obesity I)`
    result.classList = 'obesity-i'
  } else if(calculation > 34.9 && calculation < 41){
    result.innerHTML = `${calculation.toFixed(2)} (obesity-II)`
    result.classList = 'obesity-iii'
  } else if (calculation > 40){
    result.innerHTML = `${calculation.toFixed(2)} (obesity-III)`
    result.classList = 'obesity-iii'
  }
}

document.querySelector('.calculate').addEventListener('click', () =>{
  calculate();
});

document.querySelector('#clear').addEventListener('click', () =>{
  weight.value = 0;
  height.value = 0;
  result.innerHTML = '';
  result.classList = 'default'
  console.log(weight.value)
});