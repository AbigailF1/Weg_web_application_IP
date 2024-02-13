str = `
{
	"user1": {
		"name": "abenezer",
		"password": "12345678"
	},
	"user2": {
		"name": "abigail",
		"password": "12345678"
	}
}
`;
const username_input = document.getElementById("username");
const password_input = document.getElementById("password");
const login_btn = document.getElementById("btn");
const userinfo = JSON.parse(str);

console.log(userinfo);
function validate() {
	uname = username_input.value;
	upass = password_input.value;
	for (user in userinfo) {
		if (uname === userinfo[user].name) {
			if (userinfo[user].password === upass) {
				return true;
			}
		}
	}
	alert("The username or password you just entered is incorrect");
	return false;
}
