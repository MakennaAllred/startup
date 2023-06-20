// let username = null;
// (async () => {
//   const response = await fetch('/api/cookie');
//   username = await response.json();
//   if (username) {
//     document.querySelector('#name').textContent = username;
//     setDisplay('logincontrols', 'none');
//     setDisplay('loggedincontrols', 'block');
//     setDisplay('eventcontrols', 'none');
//   }
//   else{
//     setDisplay('eventcontrols', 'none');
//     setDisplay('logincontrols', 'block')
//     setDisplay('loggedincontrols', 'none')
//   }
// })();

// async function loginUser(){
//   loginorCreate(`/api/auth/login`);
// }

// async function createUser() {
//   loginorCreate(`/api/auth/create`);
// }

// async function loginorCreate(endpoint){
//   const username = document.querySelector('#name')?.value;
//   const password = document.querySelector('#Password')?.value;
//   console.log(username, password,);
//   const response = await fetch(endpoint, {
//     method: 'POST',
//     body: JSON.stringify({email: username, password:password}),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });

//   if(response.ok) {
//     localStorage.setItem('userName', username);
//     window.location.href = 'events.html';
//   }
//   else{
//     const body = await response.json();
//     window.alert(`Error: ${body}`);
//   }
// }

// function logout() {
//   fetch(`/api/auth/logout/`, {
//     method: 'DELETE',
//   }).then(() => ((setDisplay('logincontrols', 'block')),
//   (setDisplay('loggedincontrols', 'none'))));

// }

// async function getUser(email) {
//   const response = await fetch(`/api/user/${email}`);
//   if (response.status === 200) {
//     return response.json();
//   }
//   return null;
// }

// function setDisplay(controlid, display){
//   const element = document.querySelector(`#${controlid}`);
//   if(element) {
//     element.style.display = display;
//   }
// }

// function events(){
//   window.location.href = 'events.html';
// }

