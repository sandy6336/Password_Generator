const passwordBox = document.getElementById("password");
const length = 8;
const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@$&_";

const allchars = UpperCase + LowerCase + number + symbol ;

function createPassword(){
    let generatedPassword = "";
    generatedPassword += UpperCase[Math.floor(Math.random() * UpperCase.length)];
    generatedPassword += LowerCase[Math.floor(Math.random() * LowerCase.length)];
    generatedPassword += number[Math.floor(Math.random() * number.length)];
    generatedPassword += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > generatedPassword.length) {
        generatedPassword += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordBox.value = generatedPassword;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

function clearPassword() {
    passwordBox.select();
    passwordBox.value = "";
}