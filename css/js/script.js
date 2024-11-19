// Immigration data (mock database)
const immigrationData = {
    "visa requirements": "You need a valid passport, completed visa application, and proof of financial resources.",
    "work visa": "Apply for a work visa with an offer letter, contract, and proof of employer sponsorship.",
    "student visa": "Submit proof of enrollment in a Spanish institution, proof of funds, and health insurance.",
    "permanent residency": "Live in Spain for 5 years continuously with a valid residence permit to apply.",
    "citizenship": "After 10 years of residency in Spain, you can apply for citizenship."
};

// Handle user input
function handleUserMessage() {
    const userMessage = document.getElementById("user-message").value.toLowerCase();
    const messagesDiv = document.getElementById("messages");

    // Append user's message
    const userDiv = document.createElement("div");
    userDiv.textContent = `You: ${userMessage}`;
    userDiv.classList.add("user-message");
    messagesDiv.appendChild(userDiv);

    // Bot response
    const responseDiv = document.createElement("div");
    if (immigrationData[userMessage]) {
        responseDiv.textContent = `Bot: ${immigrationData[userMessage]}`;
    } else {
        responseDiv.textContent = "Bot: Sorry, I don't have information on that topic yet.";
    }
    responseDiv.classList.add("bot-message");
    messagesDiv.appendChild(responseDiv);

    // Clear input field
    document.getElementById("user-message").value = "";

    // Scroll to bottom
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Add event listener to send button
document.getElementById("send-btn").addEventListener("click", handleUserMessage);

// Allow Enter key to send message
document.getElementById("user-message").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        handleUserMessage();
    }
});
