const addformListener = () => {
    const userForm = document.getElementById('user-form')
    console.log(userForm)
    userForm.onsubmit = async(e) => {
        e.preventDefault()
        const formData = new FormData(userForm)
        const data = Object.fromEntries(formData.entries())
        await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })
        
        
    }
}

window.onload = () => {
    addformListener()
}