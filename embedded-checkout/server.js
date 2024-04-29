require("dotenv").config({
  path: [".env", ".env.local"],
});

const express = require("express");
const app = express();
app.use(express.static("public"));

const PORT = 4000;
const SUCCESS_URL = `http://localhost:${PORT}/success.html`;
const MERCHANT_ID = "ME01...";
const API_KEY = "abc.abc.abc";
const RVVUP_API_URL = "https://api.sandbox.rvvup.com/api/2024-03-01";

app.post("/checkout", async (_, res) => {
  const checkout = await fetch(`${RVVUP_API_URL}/${MERCHANT_ID}/checkouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      amount: {
        amount: "10.50",
        currency: "GBP",
      },
      reference: "my reference",
      successUrl: SUCCESS_URL,
    }),
  }).then((res) => res.json());

  res.send({ checkoutUrl: checkout.url });
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
