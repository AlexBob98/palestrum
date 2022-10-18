const SQUARE_NUMBERS = 400;

const container = document.querySelector('.hero__blocks-block');

let colors = ['#f08', '#ff9300', '#008b2d', '#0056dc'];

const section = document.getElementById('square');

function createSquare() {
    const square = document.createElement('span');

    let size = Math.random() * 40;
    square.style.width = 20 + size + 'px';
    square.style.height = 20 + size + 'px';
    let bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = bg;
    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';
    square.style.opacity = '0.1';

    section.append(square);
    setTimeout(() => {
        square.remove();
    }, 10000);
}

setInterval(createSquare, SQUARE_NUMBERS);


const squaresDelete = document.getElementById('square');

let count = 0;

const localNow = localStorage.getItem('number');

const createBlock = document.createElement('div');
const text = document.createElement('p');
createBlock.append(text);
createBlock.classList.add('numbers-square');
container.append(createBlock);

squaresDelete.addEventListener('mousemove', (event) => {
    const deleteCurrent = event.target;
    
    if (deleteCurrent) {
        deleteCurrent.classList.add('pulse');
        count++;
        text.innerHTML = count;
        localStorage.setItem('number', JSON.stringify(count));
    }
});

function local() {
    if (localNow) {
        text.innerHTML = localNow;
    }
}
local();




    

