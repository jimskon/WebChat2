
// Things to do at page load
function pageInit() {

}

// Function to force scrollable window at bottom
function updateScroll(){
    var element = document.getElementById("chatBox");
    element.scrollTop = element.scrollHeight;
}

// Respond to send button
function addText() {
    // Get the text from the text box
    var inText = document.chatForm.textInput.value;
    
    // Make sure something is there
    if (inText.length < 1) return;
    
    // Clear the input text
    document.chatForm.textInput.value = "";
	
    // add to the bottom of the chat box
    document.getElementById('chatBox').innerHTML += "<font color='red'>You: </font>" + inText+"<br />";
    // force to bottom
    updateScroll();
}
