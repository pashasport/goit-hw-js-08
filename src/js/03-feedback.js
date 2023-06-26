const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');
const emailTextEl = document.querySelector('[name="email"]');
const messageTextEl = document.querySelector('[name="message"]');
const LOCAL_KEY_FORM = 'feedback-form-state';
formEl.addEventListener('input', throttle(handleInputForm, 500));
formEl.addEventListener('submit', handleSubmitForm);

reloadPage();

function handleInputForm() {
  const formData = {
    email: emailTextEl.value,
    message: messageTextEl.value,
  };

  localStorage.setItem(LOCAL_KEY_FORM, JSON.stringify(formData));
}

function reloadPage() {
  const reloadStorage = JSON.parse(localStorage.getItem(LOCAL_KEY_FORM));
  const { email, message } = reloadStorage;
  if (reloadStorage) {
    messageTextEl.value = message || '';
    emailTextEl.value = email || '';
  }
}

function handleSubmitForm(e) {
  e.preventDefault();

  if (emailTextEl.value === '' || messageTextEl.value === '') {
    return alert('Please fill in all the fields!');
  }

  const formData = {
    email: emailTextEl.value,
    message: messageTextEl.value,
  };

  localStorage.removeItem(LOCAL_KEY_FORM);

  formEl.reset();
  console.log(formData);
}
