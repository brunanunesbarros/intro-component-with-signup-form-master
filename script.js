function clickInput(id) {
    document.getElementById(id).setAttribute('placeholder', '');
    document.getElementById(id).classList.remove('form-error');
    document.getElementById('par-' + id).style.visibility = 'hidden';''
}

function outsideInput(id, placeholder) {
    document.getElementById(id).setAttribute('placeholder', placeholder);
}

function submitForm() {
    let result = document.getElementsByClassName("form-input-checking");

    for(let i = 0; i < result.length; i++) {
       if(result[i].children[0].value === '') {
           result[i].children[0].classList.add('form-error');
           result[i].children[1].style.visibility = "visible";
           result[i].children[0].placeholder = "";
            if(result[i].children[0].id === "email-address"){
                result[i].children[0].placeholder = "email@example.com";
            }
        }
    }
}



