const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hex = document.querySelector('.hex');


colorBtn.addEventListener('click', changeColor);

function changeColor() {
    // let hexColor = '#';
    
    let hexColor = ['#'];
    
    for(let i=0; i<6; i++) {
        let random = Math.floor(Math.random()*hexNumbers.length);
        hexColor.push(hexNumbers[random]);

        // hexColor +=hexNumbers[random]
    }
    bodyBcg.style.backgroundColor = hexColor.join('');
    hex.innerHTML = hexColor;
}