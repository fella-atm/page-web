
if (!localStorage.getItem('loggedInUser')) {
  window.location.href = 'accueil.html';
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;

  
  if (name === 'yasmine' && password === 'haridi') {
    localStorage.setItem('loggedInUser', name); 
    window.location.href = 'essai.html'; 
  } else if (name === 'fella' && password === 'atmani') {
    localStorage.setItem('loggedInUser', name); 
    window.location.href = 'essai.html'; 
  } else {
    alert('login unsuccessful');
  }
});
document.getElementById('logoutButton').addEventListener('click', function() {
  localStorage.removeItem('loggedInUser'); 
  window.location.href = 'Login.html'; 
});
