const messagesDiv = document.getElementById('messages');
const userInput = document.getElementById('userInput');

const botResponses = [
    "Hello! How can I help you?",
    "I'm not sure about that.",
    "That's interesting!",
    "Can you clarify?",
    "Sorry, I didn't get that.",
    "Let me think...",
    "Sounds good!"
];

function appendMessage(who, text) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = who + ': ' + text;
    messagesDiv.appendChild(messageDiv);
}

function sendMessage() {
    const userText = userInput.value;
    if (!userText) return;

    appendMessage('You', userText);

    // Get a random response
    const randomIndex = Math.floor(Math.random() * botResponses.length);
    const botReply = botResponses[randomIndex];

    setTimeout(() => {
        appendMessage('Bot', botReply);
    }, 1000);  // Simulate some processing delay

    userInput.value = '';  // Clear the input field
}

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
