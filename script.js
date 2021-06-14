function submitForm() {
    let result = document.getElementsByTagName("input");
    console.log(result)
   
    for(let i = 0; i < result.length; i++) {
       if(result[i].value === '') {
           result[i].classList.add('form-error');
           result[i].placeholder = "";
           
       }    
    }
}