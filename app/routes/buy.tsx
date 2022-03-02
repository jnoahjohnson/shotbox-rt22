import { LoaderFunction, redirect } from "remix";
import Client from "shopify-buy";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: "shotbox-llc.myshopify.com",
  storefrontAccessToken: "1045d72a1c41f814ae63b285d379cf45",
});

export let loader: LoaderFunction = async () => {
  //   client.product.fetchAll().then((products) => {
  //     // Do something with the products
  //     products.forEach((product) =>
  //       console.log(product.title, product.variants[0].id)
  //     );
  //   });

  const lineItems = [
    {
      variantId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zNjYyNTIxMDQ0MTg3Nw==",
      quantity: 1,
    },
  ];

  let checkout = await client.checkout.create({ lineItems });

  return redirect(checkout.webUrl);
};
