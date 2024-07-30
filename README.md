# Piopiy Voice Call Integration

This document provides detailed information on how to use the Piopiy library to manage various types of voice calls, including:

#### [Call masking](/call_masking)

- [Delivery agent to customer](/call_masking/delivery_agent_to_customer.md)

- [Customer to delivery agent](/call_masking/customer_to_delivery_agent.md)

#### [Transaction alert call](/transaction_alert_call/alert_call.js)

#### [Order confirmation call](/order_confirmation_call/confirmation_call.js)

#### [Outbound dialer](/outbound_dialer/dialer.js)

## Prerequisites

Before you start, ensure you have the following:

- <a href="https://git-scm.com/" target="_blank">git</a> (>= 2.45.2 required)
- <a href="https://nodejs.org/en/" target="_blank">node.js</a> (>= v20.12.0 required)
- <a href="https://www.npmjs.com/" target="_blank">npm</a> (>= 10.8.2 required)
- <a href="https://ngrok.com/" target="_blank">ngrok</a> (>= 3.13.0 required)
- <a href="https://www.npmjs.com/package/express" target="_blank">express</a> (>= 4.19.2 required)

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