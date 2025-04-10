import { addMessage } from './addMessage.js';

window.onload = function() {
    
const chatForm = document.getElementById("chatForm");
const userMessage = document.getElementById("user-message");

chatForm.onsubmit = async function(event) {
    event.preventDefault();
    
    let messageme = userMessage.value;
    if(messageme == ""){
        alert("invalid message");
        return;
    }

    try{
        addMessage("user", messageme);
        userMessage.value = "";

        const processResponse = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: messageme}),
        })

        const response = await processResponse.json();
        addMessage("Iron-man", response.response);
    }catch(error){
        addMessage("Iron-man", "Sorry, there was a problem processing your message. Could you try again?");
    }
}
}