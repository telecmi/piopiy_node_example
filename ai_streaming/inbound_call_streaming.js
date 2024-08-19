const express = require("express");
const { PiopiyAction } = require("piopiy");
const app = express();
app.use(express.json())


app.post('/stream', (req, res) => {

    const action = new PiopiyAction();

    const ws_url = "ws://example.tcp.ngrok.url"   // Your websocket tcp ngrok URL

    const options = {

        listen_mode: "both" // Determines which part of the call audio is captured and stored
    };

    action.call(ws_url, options)
    res.send(action.PCMO())
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});