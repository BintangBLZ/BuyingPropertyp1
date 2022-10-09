const Name = document.getElementById('Name')
const Alamat = document.getElementById('Alamat')
const Tanggal = document.getElementById('Tanggal')
const email = document.getElementById('email')
const password = document.getElementById('password')
const Phone_Number = document.getElementById('Phone Number')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(!validateName() || !validateAlamat() || !validateEmail() || !validatePassword() || !validateTanggal() || !validatePhoneNumber()){
        return false;
    }
    else{
        window.location.href = "index.html";
    }
    
    

})



function validateName(){
    const nameValue = Name.value.trim();
    if(!nameValue){
        setErrorFor(Name, 'Name Cannot Be Blank');
        return false;
    }
    else{
        setSuccessFor(Name);
        return true;
    }

}

function validateAlamat(){
    const AlamatValue = Alamat.value.trim();
    if(!AlamatValue){
        setErrorFor(Alamat, 'Address Cannot Be Blank');
        return false;
    }
    else{
        setSuccessFor(Alamat);
        return true;
    }
}

function validateTanggal(){
    const TanggalValue = Tanggal.value.trim();
    if(!TanggalValue){
        setErrorFor(Tanggal, 'Date Cannot Be Blank');
        return false;
    }
    else{
        setSuccessFor(Tanggal);
        return true;
    }
}

function validateEmail(){
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

function validatePassword(){
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

function validatePhoneNumber(){
    const Phone_NumberValue = Phone_Number.value.trim();
    if(!Phone_NumberValue){
        setErrorFor(Phone_Number, 'Phone Number Cannot Be Blank');
        return false;
    }
    else if(!isPhoneNumber(Phone_NumberValue)){
        setErrorFor(Phone_Number, 'Phone Number Must Contain 12 Character');
        return false;
    }
    else{
        setSuccessFor(Phone_Number);
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

function isPhoneNumber(Nomor_Telepon) {
    return /^\d{12}$/.test(Nomor_Telepon);
}

function openIndexPage(){
    
}

