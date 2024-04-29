initialize();

async function initialize() {
  const fetchCheckoutUrl = async () => {
    const response = await fetch("/checkout", {
      method: "POST",
    });
    const { checkoutUrl } = await response.json();
    return checkoutUrl;
  };

  const rvvup = Rvvup();

  const checkoutButton = document.querySelector("#checkout-button");
  checkoutButton.addEventListener("click", async () => {
    const checkout = await rvvup.createEmbeddedCheckout({
      fetchCheckoutUrl,
    });
    checkout.mount();
  });
}
