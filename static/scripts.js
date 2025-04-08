const chatForm = document.getElementById("chatForm");
const userMessage = document.getElementById("user-message");

chatForm.onsubmit = async function(event) {
    event.preventDefault();
    
    let messageme = userMessage.value;
    if(messageme == ""){
        console.log("invalid message")
    }else{

        addMessage("user", messageme);

        const processResponse = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: messageme}),
        })

        const response = await processResponse.json();
        addMessage("Iron-man", response.response);
        console.log(response.response, typeof response.response);
    }
}

function addMessage(sender, message){
    const chatbody = document.getElementById('chat-body');
    const messageGroup = document.createElement('div');
    console.log(message,"function");
    if(sender === "user"){
        messageGroup.classList.add("flex","justify-end");
    }else if(sender === "ai"){
        messageGroup.classList.add("flex","justify-start");
    }else{
        console.log("invalid value");
    }

    messageGroup.innerHTML = `<div id="usersinfo" class="max-w-[55%] min-w-[20%]  bg-[#0B0807] border-2 border-[#362C11] border-double mb-4 py-2 p-4 rounded text-white">
                    <div class="display inline-block font-xs border-b-2 mb-2">${sender}: </div>
                    
                    <div>${message}</div>
                </div>`;
    chatbody.appendChild(messageGroup);
    chatbody.scrollTop = chatbody.scrollHeight;

}