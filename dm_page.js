const sidebar = document.getElementsByClassName("sidebar");
const menubtn = document.getElementById("toggle-menu");
const chat = document.getElementsByClassName("chat");
const sendbtn = document.getElementById("send");
const text = document.getElementById("text-input");

function makeChatElement(s) {
	res = `<div class="chat-text-bubble sent"> ${s} </div>`;
	return res;
}

sidebar[0].style.display = "none";
menubtn.addEventListener("click", () => {
	console.log("hello");
	if (sidebar[0].style.display === "none") {
		sidebar[0].style.display = "block";
	} else {
		sidebar[0].style.display = "none";
	}
});

sendbtn.addEventListener("click", () => {
	console.log(chat);
	event.preventDefault();
	chat[0].innerHTML += makeChatElement(text.value);
	text.value = "";
});
