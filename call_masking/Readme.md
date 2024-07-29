# Piopiy Voice Call Example

This example demonstrates how to use the Piopiy library to make a voice call from a delivery agent to a customer using a call masking number.

## Steps to Run the Code

### 1. Clone the Repository

Use the **git clone** command to clone the PIOPIY node from our <a href="https://github.com/telecmi/piopiy_node_example" target="_blank">TeleCMI github repository</a>.

```bash
git clone https://github.com/telecmi/piopiy_node_example.git
```

First, clone this repository to your local machine:

```sh
cd call_masking
```

### 2. Install the Piopiy NPM Package

Navigate to the project directory and install the piopiy npm package:

```sh
npm install piopiy
```

### 3. Configure the Call Parameters

Replace the placeholders in the script with your actual values for appid, app_token, delivery_agent_number, call_masking_number, and customer_number.

### 4. Run the Code

Execute the script using Node.js:

```sh
node deliveryAgent_customer.js
```

## Example Usage

Replace the placeholders in the code with your actual values:

```javascript
const { Piopiy } = require("piopiy");
const piopiy = new Piopiy("your_appid", "your_app_token");

const delivery_agent_number = 919800000000; // Example agent phone number
const call_masking_number = 919700000000; // Example call masking number
const customer_number = 919600000000; // Example customer phone number
const options = {
  duration: 15,
  timeout: 25,
  loop: 2,
};

piopiy.voice
  .call(delivery_agent_number, call_masking_number, customer_number, options)
  .then((res) => {
    console.log("Sucess response:", res);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## Parameters type and description

These are the list of parameters and its description

| parameter             | Type   | Description                                                                   |
| --------------------- | ------ | ----------------------------------------------------------------------------- |
| delivery_agent_number | number | The phone number of the agent receiving the call, including the country code. |
| call_masking_number   | number | The call masking number provided by the Piopiy TeleCMI platform.              |
| customer_number       | number | The phone number of the customer being called, including the country code.    |
| options               | object | An object containing optional parameters.                                     |
| duration              | number | The maximum duration of the call in seconds,By default 5400 seconds.          |
| timeout               | number | Time to wait for the call to be answered in seconds,By default 40 seconds.    |
| loop                  | number | The number of retry attempts if the call is not answered,By default 1.        |

## Sample Response

Below is the following sample call response.

```javascript

{
  "data": { "status": 'progress' },
  "status": 'progress',
  "request_id": 'X0uoi5LT5vCMOG6CZGEdMMYD5RL9raaEFa1p1IQ9EVm',
  "cmi_code": 200
}

```

## Properties

These are the list of properties and its description

| Property   | Type   | Description                  |
| ---------- | ------ | ---------------------------- |
| status     | string | The Status of the call.      |
| request_id | string | The Unique ID for this call. |

## HTTP status codes

| cmi_code | cmi_code type | Description              |
| -------- | ------------- | ------------------------ |
| 200      | Success       | We received the request. |
| 401      | Error         | Authentication failed.   |