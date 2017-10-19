    //if any of those 3 field are not filled, send an alert individually.
     // if they're filled, prompt a message that says ' 5..4..3..' with a cancel button
     // if cancel button is clicked, cancel the function.

//*****Tip
// always name your functions as verb. ex) remove instead removing *****

var timeoutId;


var recipientBox;
var subjectBox;
var saySomethingBox;
var timerGoesHere;


 function setup() {
	recipientBox = document.getElementById("username");
    subjectBox = document.getElementById("subject");
    saySomethingBox = document.getElementById("saySomething");
    timerGoesHere = document.getElementById("timerGoesHere");
 }

function sendImmediately(){
	timerGoesHere.innerHTML = "";
	alert("sent!");
}

function onCancel(){
	//cancel timeoutId, and alert "cancel"//
    clearTimeout(timeoutId);
    timerGoesHere.innerHTML = "";
    alert("Canceled");
}

 
function sendItInTheFuture(){


    if (recipientBox.value.length < 5){
    	alert("Your recipient should be more than 5 letters");
    	return; 
        //***return finished the execution of the function and ignore the rest***//
        //
    }

    if (subjectBox.value.length < 5){
    	alert("Your subject should be more than 5 letters");
    	return; 
    }
    
    if (saySomethingBox.value.length < 5){
    	alert("Your text should be more than 5 letters");
    	return; 
    	
    }

	timeoutId = setTimeout( sendImmediately, 5000);


	var timerText = document.createElement("id");
	timerText.innerHTML = "wait for it... ";
    timerGoesHere.appendChild(timerText);
    
    var cancelButton = document.createElement("button");
    cancelButton.innerHTML = "CANCEL";
    timerGoesHere.appendChild(cancelButton);
    cancelButton.addEventListener("click", onCancel);
}






