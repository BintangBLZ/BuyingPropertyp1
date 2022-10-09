const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!validateEmailLogin() || !validatePasswordLogin()){
        return false;
    }
    else{
        window.location.href = "index.html";
    }
    
    

})

function validateEmailLogin(){
    const emailValue = email.value.trim();
    if(!emailValue){
        setErrorFor(email, 'Email Cannot Be Blank');
        return false;
    }
    else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email Is Not Valid');
        return false;
    }
    else{
        setSuccessFor(email);
        return true;
    }

}

function validatePasswordLogin(){
    const passwordValue = password.value.trim();
    if(!passwordValue){
        setErrorFor(password, 'Password Cannot Be Blank');
        return false;
    }
    else if(!isPassword(passwordValue)){
        setErrorFor(password, 'Password Must Contain 8 - 12 Character and Mush Contain Capital Letter, Non Capital Letter, and Number');
        return false;
    }
    else{
        setSuccessFor(password);
        return true;
    }


}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPassword(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/.test(password);
}
function openIndexPage(){
    
}