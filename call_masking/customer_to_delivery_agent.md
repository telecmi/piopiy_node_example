# Piopiy Voice Call Example (Customer to Delivery Agent)

This example demonstrates how to use the Piopiy library to make a voice call from a customer to a delivery agent using a call masking number.

## Prerequisites

Before you start, ensure you have the following:

- <a href="https://git-scm.com/" target="_blank">git</a> (>= 2.45.2 required)
- <a href="https://nodejs.org/en/" target="_blank">node.js</a> (>= v20.12.0 required)
- <a href="https://www.npmjs.com/" target="_blank">npm</a> (>= 10.8.2 required)
- <a href="https://ngrok.com/" target="_blank">ngrok</a> (>= 3.13.0 required)
- <a href="https://www.npmjs.com/package/express" target="_blank">express</a> (>= 4.19.2 required)

## Steps to run the code

### 1. Clone the repository

Use the **git clone** command to clone the PIOPIY node from our <a href="https://github.com/telecmi/piopiy_node_example" target="_blank">TeleCMI github repository</a>.

```bash
git clone https://github.com/telecmi/piopiy_node_example.git
```

First, clone this repository to your local machine:

```sh
cd piopiy_node_example
```

### 2. Install the piopiy npm package

Navigate to the project directory and install the required npm packages:

```sh
npm install piopiy express
```

### 3. Configure the call parameters

Replace the placeholders in the script with your actual values for **app_id**, **app_secret**, **customer_number**, **call_masking_number**, and **delivery_agent_number**.

### 4. Create and run the Express.js server

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

### 5. Create a public URL using ngrok

To expose your local server to the internet, use ngrok to create a public URL:

```sh
ngrok http 3001
```

Copy the URL provided by ngrok. This URL will look something like **https://abcd1234.ngrok.io**.

### 6. Configure Piopiy dashboard

Log in to your Piopiy dashboard and paste the ngrok URL into the "Answer URL" input field. Ensure that the endpoint is set correctly to handle inbound calls.

```sh
https://abcd1234.ngrok.io/inbound
```

### 7. Test the setup

Once the setup is complete, you can test the call flow by initiating a call. When the customer calls, the system will use the call masking number to connect the call to the delivery agent.

By following these steps, you can successfully set up and use the Piopiy library to manage voice calls between customers and delivery agents using call masking. Ensure your parameters are correctly configured and the phone numbers provided are valid.

## Sample response

Below is the following sample call response.

```javascript

{
  "action": 'inbound',
  "from": '19170000001',
  "to": '19170000000',
  "time": 1670568234000,
  "cmiuuid": '28b9fc5f-b147-47e1-80a4-1edf1339efe1'
}

```

## Properties

These are the list of properties and its description

| Property | Type   | Description                       |
| -------- | ------ | --------------------------------- |
| action   | string | Direction of this call.           |
| from     | number | The number who made a call.       |
| to       | number | Your PIOPIY phone number.         |
| time     | number | TTimestamp of this call.          |
| cmiuuid  | string | A unique identifier of this call. |
