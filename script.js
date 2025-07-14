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

// ✅ Home Loan Calculator function
function calculateLoan() {
    const price = parseFloat(document.getElementById('price')?.value || 0);
    const down = parseFloat(document.getElementById('down')?.value || 0);
    const term = parseInt(document.getElementById('loan')?.value || 0);
    const rate = parseFloat(document.getElementById('rate')?.value || 0) / 100 / 12;
    const months = term * 12;

    if (!price || !term || !rate) {
        document.getElementById('result').textContent = 'Please check your inputs.';
        return;
    }

    const loan = price - down;
    const monthly = (loan * rate) / (1 - Math.pow(1 + rate, -months));
    const result = isFinite(monthly) ? `Monthly Repayment: RM ${monthly.toFixed(2)}` : 'Please check your inputs.';

    if (document.getElementById('result')) {
        document.getElementById('result').textContent = result;
    }
}
