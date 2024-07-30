# Piopiy Voice Call Example (Customer to Delivery Agent)

This example demonstrates how to use the Piopiy library to make a voice call from a customer to a delivery agent using a call masking number.

## Steps to run the code

### 1. Configure the call parameters

Replace the placeholders in the script with your actual values for **app_id**, **app_secret**, **customer_number**, **call_masking_number**, and **delivery_agent_number**.

### 2. Create and run the Express.js server

Create a simple Express.js server to handle inbound calls:

```javascript
const express = require("express");
const { PiopiyAction } = require("piopiy");
const app = express();
app.use(express.json());

app.post("/inbound", (req, res) => {
  const action = new PiopiyAction();

  const delivery_agent_number = " your delivery agent number "; // Example delivery agent phone number
  const call_masking_number = "your call masking number"; // Example call masking number
  const options = { duration: 15, timeout: 25, loop: 2 };

  action.call(delivery_agent_number, call_masking_number, options);
  res.send(action.PCMO());
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
```

Run the server:

```sh
node call_masking/customer_to_delivery_agent.js
```

## Parameters type and description

These are the list of parameters and its description

| parameter             | Type   | Description                                                                   |
| --------------------- | ------ | ----------------------------------------------------------------------------- |
| delivery_agent_number | number | The phone number of the agent receiving the call, including the country code. |
| call_masking_number   | number | The call masking number provided by the Piopiy TeleCMI platform.              |
| options               | object | An object containing optional parameters.                                     |
| duration              | number | The maximum duration of the call in seconds,By default 5400 seconds.          |
| timeout               | number | Time to wait for the call to be answered in seconds,By default 40 seconds.    |
| loop                  | number | The number of retry attempts if the call is not answered,By default 1.        |

### 3. Create a public URL using ngrok

To expose your local server to the internet, use ngrok to create a public URL:

```sh
ngrok http 3001
```

Copy the URL provided by ngrok. This URL will look something like **https://abcd1234.ngrok.io**.

### 4. Configure Piopiy dashboard

Log in to your <a href="https://developer.telecmi.com" target="_blank">Piopiy dashboard</a> and paste the ngrok URL into the "Answer URL" input field. Ensure that the endpoint is set correctly to handle inbound calls.

```sh
https://abcd1234.ngrok.io/inbound
```

### 5. Test the setup

Once the setup is complete, you can test the call flow by initiating a call. When the customer calls, the system will use the call masking number to connect the call to the delivery agent.

By following these steps, you can successfully set up and use the Piopiy library to manage voice calls between customers and delivery agents using call masking. Ensure your parameters are correctly configured and the phone numbers provided are valid.