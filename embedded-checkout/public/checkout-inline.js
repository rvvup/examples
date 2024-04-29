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

  const checkoutContainer = document.querySelector("#checkout-container");

  const checkout = await rvvup.createEmbeddedCheckout({
    fetchCheckoutUrl,
  });

  checkout.mount({
    type: "inline",
    selector: checkoutContainer,
  });
}
