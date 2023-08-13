let passwordCharacters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&.*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 10;
let password = "";


function genPassword() {
    for (let i = 0; i <= passwordLength; i+=1) {
        let randomNumber = Math.floor(Math.random() * passwordCharacters.length);
        password += passwordCharacters.charAt(randomNumber);
       }

       document.getElementById("input-1").value =  password;
       document.getElementById("input-2").value =  password;
       document.getElementById("input-3").value =  password;
       document.getElementById("input-4").value =  password;

       if (password === password) {
        password -= password
       }
}

function copyPasswordOne () {
    let text = document.getElementById("input-1").value;
    navigator.clipboard.writeText(text)
}

function copyPasswordOne () {
    let text = document.getElementById("input-1").value;
    navigator.clipboard.writeText(text)
}





document.addEventListener('click', function copyFirstPassword() {
    document.getElementById('copy-1').onclick = copyPasswordOne;
  });



document.addEventListener('click', function passwordGeneratorButton() {
    document.getElementById('generate-btn').onclick = genPassword;
  });