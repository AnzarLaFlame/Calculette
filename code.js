let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let buttons = Array.from(document.getElementsByClassName('button'));
let butttons = Array.from(document.getElementsByClassName('but'));
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case '=': 
            try {
                screen2.innerText = eval(screen1.innerText);
            } catch {
                screen2.innerText = 'Error';
            }
                break;
            default:
                screen1.innerText += e.target.innerText;
        }
    });
});
butttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                screen1.innerText = '';
                screen2.innerText = '';
                break;
            case 'DEL':
                screen1.innerText = screen1.innerText.slice(0, -1);
                screen2.innerText = '';
                break;
        }
    });
});