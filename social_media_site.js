
var database = [
	{
		username: "joe",
		password: "catdog"
	}
];

var newsFeed = [
	{
		username: "tim",
		timeline: "tired from all that learning"
	},
	{
		username: "bill",
		timeline: "love that JS stuff"
	}
];


var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
	if (user === database[0].username && pass === database[0].password) {
		console.log(newsFeed)
	} else {
		alert("sorry wrong username or password")
	}
};

// by passing the prompt into the parameters when the user enters information the function
// take that info and compare it as instructed in the function and evaluate the input
signIn(userNamePrompt, passwordPrompt);
