(async () => {
  const username = localstorage.getItem('username');
  if (username) {
    document.querySelector('#name').textContent = username;
    setDisplay('logincontrols', 'none');
    setDisplay('eventcontrols', 'block');
  }
  else{
    setDisplay('logincontrols', 'block')
  }
})();

async function loginUser(){
  loginorCreate(`/api/auth/login`);
}

async function loginorCreate(endpoint){
  const username = document.querySelector('#name')?.value;
  const password = document.querySelector('#Password')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({email: username, password:password}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if(response.ok) {
    localStorage.setItem('userName', username.value);
    window.location.href = 'events.html';
  }
  else{
    const body = await response.json();
    window.alert("Error");
  }
}

function logout() {
  localStorage.removeItem('username');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(email) {
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }
  return null;
}

function setDisplay(controlid, display){
  const element = document.querySelector(`#${controlid}`);
  if(element) {
    element.style.display = display;
  }
}

function events(){
  window.location.href = 'events.html';
}
