# Piopiy Voice Call Integration

This document provides detailed information on how to use the Piopiy library to manage various types of voice calls, including inbound call masking, outbound call masking, order confirmation calls, and transaction alert calls.

## Installation

Ensure you have Node.js installed on your machine. To use the Piopiy API, install the piopiy package from npm:

```
npm install piopiy
```

## Outbound Call Masking

This section demonstrates how to make an outbound call with masking using Piopiy.

## Code Example

Below is the following sample example code

```javascript
const { Piopiy } = require("piopiy");
const piopiy = new Piopiy("your_appid", "your_app_token");

const agent_number = 919999999999;
const caller_id = 918000000000;
const customer_number = 917600000000; // Make call to one customer
const multiple_customer_numbers = [919800000000, 919700000000]; // // Make call to multiple customers

const options = { duration: 10, timeout: 20, loop: 2, ring_type: 'group' }; // Ring type set for calls to multiple customer numbers

piopiy.voice.call(agent_number, caller_id, customer_number or multiple_customer_numbers , options)
  .then((res) => {
    console.log("Call connected, answer URL:", res);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## Param Details

These are the list of parameters and its description

| parameter       | Type   | Description                                                                             |
| --------------- | ------ | --------------------------------------------------------------------------------------- |
| agent_number    | number | The phone number of the agent receiving the call, including the country code.           |
| caller_id       | number | The phone number that will be displayed as the caller ID                                |
| customer_number | number | The phone number of the customer being called, including the country code.              |
| multiple_customer_numbers | number | An array of phone numbers of the customers being called, including the country code.   |
| options         | object | Additional settings for the call.                                                       |
| duration        | number | Maximum duration of the call in seconds. By default,the duration is 5400 seconds.       |
| timeout         | number | Time to wait for the call to be answered in seconds, By default,the value is 40 seconds |
| loop            | number | Number of retry attempts if the call is not answered. By default, the loop is 1.        |
| ring_type       | string | Add this parameter to enable making calls to multiple customer numbers. By default, the ring type is 'single'. |

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
