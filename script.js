function loadPage(page) {
  fetch(`${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById('content-area').innerHTML = html;
      setTimeout(() => {
        if (page === 'home') attachHomeLoan();
        if (page === 'dsr') attachDSRCalc();
      }, 100);
    });
}

function attachHomeLoan() {
  const btn = document.getElementById('calc-btn');
  if (!btn) return;

  btn.onclick = () => {
    const price = parseFloat(document.getElementById('price').value);
    const down = parseFloat(document.getElementById('down').value);
    const years = parseInt(document.getElementById('loan').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
    const months = years * 12;
    const loanAmount = price - down;

    const monthly =
      (loanAmount * rate) / (1 - Math.pow(1 + rate, -months));
    document.getElementById('result').textContent =
      isFinite(monthly) ? `Monthly Repayment: RM ${monthly.toFixed(2)}` : 'Please check your inputs.';
  };
}

function attachDSRCalc() {
  const btn = document.getElementById('dsr-btn');
  if (!btn) return;

  btn.onclick = () => {
    const income = parseFloat(document.getElementById('income').value);
    const commitment = parseFloat(document.getElementById('commitments').value);

    const maxLoanMonthly = income * 0.65;
    const currentMaxLoan = maxLoanMonthly - commitment;
    const maxLoanEstimate = currentMaxLoan * 200;

    const result = isFinite(maxLoanEstimate)
      ? `Max Loan Estimate: RM ${maxLoanEstimate.toLocaleString(undefined, { maximumFractionDigits: 0 })}`
      : 'Please check your inputs.';

    document.getElementById('dsr-result').textContent = result;
  };
}
