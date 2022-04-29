const form = document.querySelector('form')

form.addEventListener('change', (e) => {
  e.preventDefault()
  const password = form.querySelector('#password')
  const confirmPassword = form.querySelector('#confirm-password')
  if(password.value !== confirmPassword.value) {
    password.setCustomValidity('Passwords do not match')
    password.reportValidity()
  } else {
    password.setCustomValidity('')
  }
})

