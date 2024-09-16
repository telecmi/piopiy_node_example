# Piopiy Incoming Call

This example demonstrates how to make an **Outbound Call** using the Piopiy package.

## Steps to run the code

### 1.Prerequisites

Before you start, ensure you have completed the [ prerequisite steps ](/README.md).

### 2.Configure the call parameters

- Replace the value in the [ Basic Call ](/sdk_example/outbound_call/basic.js) code with your actual values for

  - [**app_id** & **app_secret**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/basic.js#L2)
  
  - [**customer_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/basic.js#L4)

  - [**piopiy_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/basic.js#L5)

  - [**agent_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/basic.js#L6)

- Replace the value in the [ Call with PCMO ](/sdk_example/outbound_call/call_with_pcmo.js) code with your actual values for

  - [**app_id** & **app_secret**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/call_with_pcmo.js#L2)

  - [**music_file**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/call_with_pcmo.js#L6)

  - [**customer_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/call_with_pcmo.js#L8)

  - [**agent_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/call_with_pcmo.js#L10)

  - [**piopiy_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/call_with_pcmo.js#L9)

- Replace the value in the [ Multiple Numbers ](/sdk_example/outbound_call/multiple_numbers.js) code with your actual values for

  - [**app_id** & **app_secret**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/multiple_numbers.js#L2)

  - [**customer_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/multiple_numbers.js#L4)

  - [**multiple_agent_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/multiple_numbers.js#L6)

  - [**piopiy_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/outbound_call/multiple_numbers.js#L5)

### 3.Run the code

Execute the code using Node.js:

- For Basic Call:

```sh
node sdk_example/outbound_call/basic.js
```

- For Call with PCMO:

```sh
node sdk_example/outbound_call/call_with_pcmo.js
```

- For Multiple Numbers:

```sh
node sdk_example/outbound_call/multiple_numbers.js
```
