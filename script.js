
function unlock() {
  const pass = document.getElementById('password').value;
  if (pass === '168') {
    document.getElementById('unlock-screen').style.display = 'none';
    document.getElementById('app-container').style.display = 'flex';
  } else {
    document.getElementById('error-msg').innerText = 'Incorrect password.';
  }
}
function showSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}
