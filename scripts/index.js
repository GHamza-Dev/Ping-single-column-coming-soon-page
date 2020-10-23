// DOM Element

const input = document.getElementById('mail');
const submit = document.getElementById('submit');
const form = document.querySelector('.form');



submit.addEventListener('click', checkInput);






function checkInput(e) {
    e.preventDefault();
    const regExp = new RegExp('[a-z-0-9]\@[a-z]\.[a-z]');
    if (input.value === '') {
        alertMessage('Please enter your email address', 'danger_text');
    } else if (!regExp.test(input.value)) {
        alertMessage('Please enter a valide email', 'danger_text');
    } else {
        // --
    }

}

function alertMessage(msg, msgStyle) {
    const p = document.createElement('p');
    p.className = msgStyle;
    p.appendChild(document.createTextNode(msg));
    form.appendChild(p);
    input.style.border = "2px solid red";
    setTimeout(() => {
        p.remove();
        input.style.border = "";
    }, 2000);
}