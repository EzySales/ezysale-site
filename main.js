document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("root");
  app.innerHTML = `
    <div style="max-width: 400px; margin: 50px auto; text-align: center;">
      <h1>Ezysale Team Login</h1>
      <input type="password" id="pass" placeholder="Enter password" />
      <br>
      <button onclick="check()">Login</button>
      <div id="output" style="margin-top: 20px;"></div>
    </div>`;
});

function check() {
  const pass = document.getElementById("pass").value;
  const out = document.getElementById("output");
  if (pass === "4") {
    out.innerHTML = `
      <h2>🏢 About Us</h2>
      <p>Ezysale is a real estate team aiming to support agents with tools and resources.</p>
      <h3>📊 Home Loan Calculator</h3>
      <input id="price" placeholder="Property Price" />
      <input id="down" placeholder="Downpayment" />
      <input id="rate" placeholder="Interest (%)" />
      <input id="years" placeholder="Loan Tenure (Years)" />
      <br><button onclick="calc()">Calculate</button>
      <div id="result" style="margin-top: 10px;"></div>
    `;
  } else {
    out.textContent = "❌ Wrong password.";
  }
}

function calc() {
  const P = parseFloat(document.getElementById("price").value) - parseFloat(document.getElementById("down").value);
  const r = parseFloat(document.getElementById("rate").value) / 100 / 12;
  const n = parseInt(document.getElementById("years").value) * 12;
  const payment = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  document.getElementById("result").innerHTML = "💰 Monthly Payment: RM " + payment.toFixed(2);
}