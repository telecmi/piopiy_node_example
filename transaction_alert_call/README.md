# Piopiy Voice Call Example ( Transaction Alert Call )

This example shows how to make a transaction alert call using a caller ID with the Piopiy package.

## Steps to run the code

### 1.Prerequisites

Before you start, ensure you have completed the [ prerequisite steps ](/README.md).

### 2.Configure the call parameters

Replace the value in the [ Transaction alert call ](/transaction_alert_call/alert_call.js) code with your actual values for

- [**app_id** & **app_secret**](https://github.com/telecmi/piopiy_node_example/blob/development/transaction_alert_call/alert_call.js#L2)
- [**music_file**](https://github.com/telecmi/piopiy_node_example/blob/development/transaction_alert_call/alert_call.js#L5)
- [**customer_number**](https://github.com/telecmi/piopiy_node_example/blob/development/transaction_alert_call/alert_call.js#L6)
- [**caller_id**](https://github.com/telecmi/piopiy_node_example/blob/development/transaction_alert_call/alert_call.js#L7)

### 3.Run the code

Execute the code using Node.js:

```sh
node transaction_alert_call/alert_call.js
```

### 4.Expected call flow

When the code is executed, the call will follow these steps:

**1.Initial Call to Customer:** The call is initiated to the customer's number first.

**2.Customer Answers Call:** Once the customer answers the call, alert music is played to notify them of the transaction.

You can handle these steps programmatically using the Piopiy package. Ensure that your [**app_id** & **app_secret**](https://github.com/telecmi/piopiy_node_example/blob/development/transaction_alert_call/alert_call.js#L2) are correctly configured, and the [**music_file**](https://github.com/telecmi/piopiy_node_example/blob/development/transaction_alert_call/alert_call.js#L5), [**customer_number**](https://github.com/telecmi/piopiy_node_example/blob/development/transaction_alert_call/alert_call.js#L6) and [**caller_id**](https://github.com/telecmi/piopiy_node_example/blob/development/transaction_alert_call/alert_call.js#L7) provided are valid.

## Example usage

Replace the placeholders in the code with your actual values:

```javascript
const { Piopiy, PiopiyAction } = require("piopiy");
const piopiy = new Piopiy("your_app_id", "your_app_secret");
const action = new PiopiyAction();

const music_file = "Your example music file or file URL"; // Example alert music file or file URL
const customer_number = "Your customer number"; // Example customer phone number
const caller_id = "Your caller id"; // Example caller id
const alert_music_pcmo_function = action.PCMO(); // Use this PCMO function to play your alert music.
const options = { duration: 15, timeout: 25, loop: 2 };

action.playMusic(music_file);

piopiy.voice
  .call(customer_number, caller_id, alert_music_pcmo_function, options)
  .then((res) => {
    console.log("Success response:", res);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## Parameters type and description

These are the list of parameters and its description

| parameter       | Type   | Description                                                                      |
| --------------- | ------ | -------------------------------------------------------------------------------- |
| music_file      | string | The music file or file URL of the alert music file to be played.                 |
| customer_number | number | The phone number of the customer receiving the call, including the country code. |
| caller_id       | number | The caller id provided by the Piopiy TeleCMI platform.                           |
| options         | object | An object containing optional parameters.                                        |
| duration        | number | The maximum duration of the call in seconds,By default 5400 seconds.             |
| timeout         | number | Time to wait for the call to be answered in seconds,By default 40 seconds.       |
| loop            | number | The number of retry attempts if the call is not answered,By default 1.           |

## Sample response

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
