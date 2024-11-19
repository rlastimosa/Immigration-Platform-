function getResponse() {
    let userInput = document.getElementById('user-input').value;
    let chatbox = document.getElementById('chatbox');
    let newMessage = document.createElement('p');
    newMessage.textContent = 'You: ' + userInput;
    chatbox.appendChild(newMessage);

    // Simple response logic (expandable for real use cases)
    let botResponse = document.createElement('p');
    if (userInput.includes('visa')) {
        botResponse.textContent = 'For information on visa applications, visit: [link to visa page].';
    } else if (userInput.includes('residence')) {
        botResponse.textContent = 'For residence permit info, check out: [link to residence page].';
    } else {
        botResponse.textContent = 'Sorry, I didn’t understand that. Can you please clarify?';
    }
    
    chatbox.appendChild(botResponse);

    // Scroll to the bottom of the chat
    chatbox.scrollTop = chatbox.scrollHeight;

    // Clear the input field
    document.getElementById('user-input').value = '';
}
