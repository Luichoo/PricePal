const addformListener = () => {
    const userForm = document.getElementById('user-form')
    console.log(userForm)
    userForm.onsubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(userForm)
        const data = Object.fromEntries(formData.entries())
        await fetch('/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })
        userForm.reset()
        
    }
}

const togglePassword = document
.querySelector('#togglePassword');

const password = document.querySelector('#password');

togglePassword.addEventListener('click', () => {

// Toggle the type attribute using
// getAttribure() method
const type = password
    .getAttribute('type') === 'password' ?
    'text' : 'password';
      
password.setAttribute('type', type);

// Toggle the eye and bi-eye icon
this.classList.toggle('bi-eye');
});
window.onload = () => {
    addformListener()
}