function unlock() {
    const pwd = document.getElementById('password').value;
    if (pwd === '168') {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'flex';
        loadPage('home');
    } else {
        alert('Wrong password!');
    }
}

function loadPage(page) {
    fetch(page + '.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('content-area').innerHTML = html;
        })
        .catch(err => {
            document.getElementById('content-area').innerHTML = "<p>Failed to load content.</p>";
        });
}
