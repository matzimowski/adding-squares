const btn = document.querySelector('.button')
let number = 1

const addElement = function(){
    const rectangle = document.createElement('div');
    rectangle.classList.add('rectangle');
    rectangle.textContent = number;

    

    if (number % 5 === 0 ){
        rectangle.classList.add('rectangle--rounded');

    }

    document.body.appendChild(rectangle);
    number++;
}

btn.addEventListener('click', addElement)