/**
 * @jest-environment jsdom
 */

import '../scripts'; 
import { addMessage } from '../addMessage.js';

describe('Chatbot Frontend', () => {

  beforeEach(() => {
    
    document.body.innerHTML = `
      <form id="chatForm">
        <div id="chat-body"></div>
        <input id="user-message" />
        <button type="submit">Send</button>
      </form>
    `;
    window.onload();
  });

  test('should not submit if message is empty', () => {
    const chatForm = document.getElementById('chatForm');
    const userMessage = document.getElementById('user-message');
    userMessage.value = "";

    const fakeSubmit = new Event('submit');
    chatForm.dispatchEvent(fakeSubmit);

    expect(userMessage.value).toBe("");
  });

  test('should add user message correctly', () => {
    addMessage("user", "Hello Stark!");

    const chatbody = document.getElementById('chat-body');
    const lastMessage = chatbody.lastChild;

    expect(lastMessage).not.toBeNull();
    expect(lastMessage.textContent).toContain("Hello Stark!");
    expect(lastMessage.textContent).toContain("user:");
    expect(lastMessage.className).toContain("justify-end");
  });

  test('should add Iron-man message correctly', () => {
    addMessage("Iron-man", "Hello, I am Iron Man!");

    const chatbody = document.getElementById('chat-body');
    const lastMessage = chatbody.lastChild;

    expect(lastMessage).not.toBeNull();
    expect(lastMessage.textContent).toContain("Hello, I am Iron Man!");
    expect(lastMessage.textContent).toContain("Iron-man:");
    expect(lastMessage.className).toContain("justify-start");
  });

});
