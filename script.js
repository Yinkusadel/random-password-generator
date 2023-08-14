const passwordCharacters =
  '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&.*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const passwordInputs = document.querySelectorAll('.password-inputs');

function generateRandomPassword() {
  // This code block generates any random password
  const passwordLength = 10;
  let password = '';
  for (let i = 0; i <= passwordLength; i += 1) {
    const randomNumber = Math.floor(Math.random() * passwordCharacters.length);
    password += passwordCharacters.charAt(randomNumber);
  }
  return password;
}

function forEachPasswords() {
  // This code block assigns unique passwords for each input on its own
  for (let i = 0; i < passwordInputs.length; i += 1) {
    const inputs = passwordInputs[i];
    inputs.value = generateRandomPassword();
  }
}

function copyPasswordOne() {
  const text = document.getElementById('input-1').value;
  navigator.clipboard.writeText(text);
}

function copyPasswordTwo() {
  const text = document.getElementById('input-2').value;
  navigator.clipboard.writeText(text);
}

function copyPasswordThree() {
  const text = document.getElementById('input-3').value;
  navigator.clipboard.writeText(text);
}

function copyPasswordFour() {
  const text = document.getElementById('input-4').value;
  navigator.clipboard.writeText(text);
}

const copyFirstPassword = document.getElementById('copy-1');
copyFirstPassword.addEventListener('click', copyPasswordOne);

const copySecondPassword = document.getElementById('copy-2');
copySecondPassword.addEventListener('click', copyPasswordTwo);

const copyThirdPassword = document.getElementById('copy-3');
copyThirdPassword.addEventListener('click', copyPasswordThree);

const copyForthPassword = document.getElementById('copy-4');
copyForthPassword.addEventListener('click', copyPasswordFour);

const generateButton = document.getElementById('generate-btn');
generateButton.addEventListener('click', forEachPasswords);
