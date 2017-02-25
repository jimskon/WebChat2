
// Things to do at page load
function pageInit() {

}

// Respond to send button
function addText() {
    // Get the text from the text box
    var inText = document.chatForm.textInput.value;
    
    // Make sure something is there
    if (inText.length < 1) return;
    
    // Clear the input text
    document.chatForm.textInput.value = "";
	
    // add to the bottom of the chat boxz
    document.getElementById('chatBox').innerHTML += "<font color='red'>You: </font>" + inText+"<br />";
}
