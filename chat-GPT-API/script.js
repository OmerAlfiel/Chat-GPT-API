document.getElementById("submit-btn").addEventListener("click", function () {
    sendToChatGPT();
});

document.getElementById("word-input").addEventListener("input", function () {
    let inputValue = document.getElementById("word-input").value;
    let submitBtn = document.getElementById("submit-btn");
    if (inputValue.trim() === "") {
        submitBtn.style.display = "none";
    } else {
        submitBtn.style.display = "block";
    }
});

// Initially hide the button
document.getElementById("submit-btn").style.display = "none";

function sendToChatGPT() {
    let value = document.getElementById("word-input").value;

    let body = {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: value }],
        tempreture: "1"
    };

    let headers = {
        Authorization: "Bearer your-api-key",
    };

    axios
        .post("https://api.openai.com/v1/chat/completions", body, {
            headers: headers,
        })
        .then((response) => {
            let reply = response.data.choices[0].message.content;
            document.getElementById("reply-content").textContent = reply;
        });
}