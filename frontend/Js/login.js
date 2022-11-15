// const addFormListener = () => {

//     const userform = document.getElemsentById('login-form');
//     userform.onsubmit = async(e) => {
//         e.preventDefault();
//         const formData = new FormData(userform);
//         const data = Object.fromEntries(formData);
//         console.log(data);
//         const response = await fetch('/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//         const json = await response.json();
//         if (json.success) {
//             window.location.href = '/home';
//         } else {
//             alert(json.message);
//         }
//     }
// };