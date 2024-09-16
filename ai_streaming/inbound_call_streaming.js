const express = require("express");
const { PiopiyAction } = require("piopiy");
const app = express();
app.use(express.json())


app.post('/stream', (req, res) => {

    const action = new PiopiyAction();

    const ws_url = "ws://example.tcp.ngrok.url"   // Your websocket tcp ngrok URL

    const options = {

        listen_mode: "both", // Specifies who hears the streamed audio. Options are callee, caller, or both.
        voice_quality: "8000", // The desired voice quality in bits per second. Options are 8000, 16000.
        stream_on_answer: true // Whether to start streaming after the call is answered.
    };

    action.call(ws_url, options)
    res.send(action.PCMO())
});

app.listen(3001, () => {
    console.log(`Server is running on port 3001`);
});