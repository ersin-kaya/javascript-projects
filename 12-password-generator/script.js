const generateButton = document.querySelector(".generate-button");
const password = document.querySelector(".password");
const copyButton = document.querySelector(".copy-button");
const alert = document.querySelector(".alert");

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);

function generatePassword() {
  let newPassword = "";
  let randomNumber = 0;
  const passwordLength = 16;
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let index = 0; index < passwordLength; index++) {
    randomNumber = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomNumber];
  }
  password.innerHTML = newPassword;
}

function copyPassword() {
  const currentPassword = password.innerHTML;

  if (currentPassword.length !== 0) {
    navigator.clipboard.writeText(currentPassword);
    alert.classList.remove("hidden");
    setTimeout(() => {
      alert.classList.add("hidden");
    }, 2000);
  }
}
