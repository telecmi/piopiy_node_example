Sure! Here is the README for the Piopiy Voice Call Integration using Node.js:

# Piopiy Voice Call Integration

## Prerequisites

Before you start, ensure you have the following:

- <a href="https://git-scm.com/" target="_blank">git</a>
- <a href="https://nodejs.org/en/" target="_blank">node.js</a> (>= v20.12.0 required)
- <a href="https://www.npmjs.com/" target="_blank">npm</a>
- <a href="https://ngrok.com/" target="_blank">ngrok</a>
- <a href="https://www.npmjs.com/package/express" target="_blank">express</a>
- <a href="https://www.npmjs.com/package/piopiy" target="_blank">piopiy</a> (>= 1.0.3 required)

### Clone the repository

Use the **git clone** command to clone the PIOPIY node from our <a href="https://github.com/telecmi/piopiy_node_example" target="_blank">TeleCMI github repository</a>.

```bash
git clone https://github.com/telecmi/piopiy_node_example.git
```

First, clone this repository to your local machine:

```sh
cd piopiy_node_example
```

### Install the piopiy npm package

Once inside the project directory, install the required npm packages:

```sh
npm install
```

## Piopiy call types

This example provides detailed information on how to use the Piopiy package to manage various types of voice calls, including:

#### [Call masking](/call_masking)

- [Delivery agent to customer](/call_masking/delivery_agent_to_customer.md)

- [Customer to delivery agent](/call_masking/customer_to_delivery_agent.md)

#### [Transaction alert call](/transaction_alert_call/README.md)

#### [Order confirmation call](/order_confirmation_call/README.md)

#### [Outbound dialer](/outbound_dialer/README.md)

#### [Inbound call center](/inbound_call_center/README.md)

#### [AI Streaming](/ai_streaming)

- [Inbound Call Streaming](/ai_streaming/inbound_call_streaming.md)

- [Outbound Call Streaming](/ai_streaming/outbound_call_streaming.md)

#### [SDK Example](/sdk_example)

- [Inbound Call](/sdk_example/inbound_call/README.md)

- [Outbound Call](/sdk_example/outbound_call/README.md)