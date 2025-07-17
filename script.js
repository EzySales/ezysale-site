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

// Auto reattach event after dynamic load
function attachLoanCalculator() {
  const btn = document.getElementById('calc-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const price = parseFloat(document.getElementById('price').value);
      const down = parseFloat(document.getElementById('down').value);
      const term = parseInt(document.getElementById('loan').value);
      const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
      const months = term * 12;

      const loan = price - down;
      const monthly = (loan * rate) / (1 - Math.pow(1 + rate, -months));
      const result = isFinite(monthly)
        ? `Monthly Repayment: RM ${monthly.toFixed(2)}`
        : 'Please check your inputs.';

      document.getElementById('result').textContent = result;
    });
  }
}

function loadPage(page) {
  fetch(page + '.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('content-area').innerHTML = html;
      setTimeout(() => {
        if (page.includes('home')) attachLoanCalculator();
      }, 100); // delay to ensure DOM loads
    })
    .catch(err => {
      document.getElementById('content-area').innerHTML = "<p>Failed to load content.</p>";
    });
}

