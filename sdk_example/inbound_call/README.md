# Piopiy Incoming Call

This example shows how to handle an **Incoming Call** from a customer using the Piopiy package.

## Steps to run the code

### 1.Prerequisites

Before you start, ensure you have completed the [ prerequisite steps ](/README.md).

### 2.Configure the call parameters

- Replace the value in the [ Basic Call ](/sdk_example/inbound_call/basic.js) code with your actual values for

  - [**agent_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/inbound_call/basic.js#L10)

  - [**piopiy_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/inbound_call/basic.js#L11)

- Replace the value in the [ Call with PCMO ](/sdk_example/inbound_call/call_with_pcmo.js) code with your actual values for

  - [**music_file**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/inbound_call/call_with_pcmo.js#L11)

  - [**customer_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/inbound_call/call_with_pcmo.js#L13)

  - [**piopiy_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/inbound_call/call_with_pcmo.js#L14)

- Replace the value in the [ Multiple Numbers ](/sdk_example/inbound_call/multiple_numbers.js) code with your actual values for

  - [**multiple_agent_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/inbound_call/multiple_numbers.js#L10)

  - [**piopiy_number**](https://github.com/telecmi/piopiy_node_example/blob/development/sdk_example/inbound_call/multiple_numbers.js#L11)

### 3.Run the code

Execute the code using Node.js:

- For Basic Call:

```sh
node sdk_example/inbound_call/basic.js
```

- For Call with PCMO:

```sh
node sdk_example/inbound_call/call_with_pcmo.js
```

- For Multiple Numbers:

```sh
node sdk_example/inbound_call/multiple_numbers.js
```