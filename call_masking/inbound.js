const { PiopiyAction } = require("piopiy");
const action = new PiopiyAction();

action.call(
    917600000000,         // Customer phone number with country code
    918000000000,         // Caller ID
    {
        duration: 10,
        timeout: 20,
        loop: 2,
        record: true
    }
);