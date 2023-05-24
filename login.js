function login() {
  const username = document.querySelector('#name');
  localStorage.setItem('userName', username.value);
  window.location.href = 'notifications.html';
  username.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("Login").click()
    }
  })
}