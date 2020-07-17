const pra = document.querySelector('.pra');
const currentPassword = document.querySelector('#currentPassword');
const newPassword = document.querySelector('#newPassword');
const confirmNewPassword = document.querySelector('#confirmNewPassword');
const resetBtn = document.querySelector('#resetBtn');
const inputField = document.querySelectorAll('input');

function validate() {
  if (currentPassword.value.length < 5) {
    pra.innerHTML = 'Incorrect Password';
    return false;
  }
  var regxPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  if (
    !regxPass.test(newPassword.value) &&
    !regxPass.test(confirmNewPassword.value)
  ) {
    pra.innerHTML = `Password don't meet the requirements`;
    return false;
  }

  if (newPassword.value !== confirmNewPassword.value) {
    pra.innerHTML = `Passwords don't match`;
    return false;
  }
}

function tuki() {
  setTimeout(function(){
    alert('hi');
  },3000);
}

const buttonShowHandler = () => {
  if (
    currentPassword.value.length > 3 &&
    newPassword.value.length > 4 &&
    confirmNewPassword.value.length > 4
  ) {
    resetBtn.removeAttribute('disabled');
    resetBtn.classList.add('loginShow');
    return false;
  } else {
    resetBtn.setAttribute('disabled', 'disabled');
    return false;
  }
};
inputField.forEach(function (element) {
  element.addEventListener('change', buttonShowHandler);
});
