exports.action = function(data, callback){

	let client = setClient(data);
	info("DateNaissanceAvatar from:", data.client, "To:", client);
	command1 (data, client);
	callback();
 
}

function command1 (data, client) {
	
	function age(birthday) {
		birthday = new Date(birthday)
		return new Number((new Date().getTime() - birthday.getTime()) / 31536000000).toFixed(0);
		}
		Avatar.speak("j'ai dabord vu le jour en octobre 2017 , j'ai etait développer par l'ingenieur et informaticien : stéphane bascherr , donc j'ai :" + age("1 OCtober 2017") + "ans!", data.client, function(){
		Avatar.Speech.end(data.client);
		});
}

function setClient (data) {
	var client = data.client;
	if (data.action.room)
	client = (data.action.room != 'current') ? data.action.room : (Avatar.currentRoom) ? Avatar.currentRoom : Config.default.client;
    if (data.action.setRoom)
	client = data.action.setRoom;
	return client;
}