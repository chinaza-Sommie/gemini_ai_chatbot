
export function addMessage(sender, message) {
    const chatbody = document.getElementById('chat-body');
    const messageGroup = document.createElement('div');

    if(sender === "user"){
        messageGroup.classList.add("flex","justify-end");
    }else{
        messageGroup.classList.add("flex","justify-start");
    }

    messageGroup.innerHTML = `<div id="usersinfo" class="max-w-[55%] min-w-[20%] bg-[#0B0807] border-2 border-[#362C11] border-double mb-4 py-2 p-4 rounded text-white">
                    <div class="display inline-block font-xs border-b-2 mb-2">${sender}: </div>
                    <div>${message}</div>
                </div>`;
    chatbody.appendChild(messageGroup);
    chatbody.scrollTop = chatbody.scrollHeight;
}
