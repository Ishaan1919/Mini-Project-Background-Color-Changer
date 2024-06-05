// Project : change background colour as the box

const buttons = document.querySelectorAll('.sq');
const body = document.querySelector('body');
buttons.forEach( (button) => {
    console.log(button);
    button.addEventListener('click',function(e){
        const color = e.target.innerText;
        body.style.backgroundColor = color;
    })
});