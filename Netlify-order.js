exports.handler = async function(event) {
  try {
    const { amount, name, phone } = JSON.parse(event.body);

    const orderId = "order_" + Date.now();

    const response = await fetch("https://sandbox.cashfree.com/pg/orders", {
      method: "POST",
  headers: {
  "Content-Type": "application/json",
  "x-api-version": "2022-09-01",
  "x-client-id": 
  "x-client-secret": 
},
      body: JSON.stringify({
        order_id: orderId,
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: phone,
          customer_name: name,
          customer_phone: phone
        }
      })
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};