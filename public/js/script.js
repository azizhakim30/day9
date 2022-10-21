function submitContact() {
  let name = document.getElementById('inputName').value
  let email = document.getElementById('inputEmail').value
  let phone = document.getElementById('inputPhone').value
  let subject = document.getElementById('inputSubject').value
  let message = document.getElementById('inputMessage').value

  if ((name, email, phone, subject, message == '')) {
    return alert('You must input all forms')
  }

  let emailReceiver = 'azizul.h@outlook.co.id'

  let a = document.createElement('a')
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello, my name ${name},My phone Number ${phone}, ${subject}, ${message}`

  a.click()
}
