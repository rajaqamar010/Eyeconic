
function contactCheck(){
	if(document.getElementById('caption').value != 31){
		alert('Your enter wrong answer of equation');
	}
}


function messageSend(){
	var name = document.getElementById('contactName').value;
	var email = document.getElementById('contactEmail').value;
	var number = document.getElementById('contactNumber').value;
	var message = document.getElementById('contactMessage').value;
	var caption = document.getElementById('caption').value;
	if((name != "") && (email != "") && (number != "") && (message != "") && (caption == 31)){
		alert('Your message send sucessfully you will soon recive answer by eyeonic official thankyou.');
	}
}

function double(){
	contactCheck();
	messageSend();
}