const input = document.querySelector(".link");
const error = document.querySelector(".error-message");
const button = document.querySelector(".button");
const qrBox = document.querySelector("#qrcode");
let link = "";

button.addEventListener("click", () => {
	checkQrBox();
	link = input.value;

	if (validURL(link)) {
		error.classList.remove("error-message_visible");
		const qrcode = new QRCode("qrcode", `${link}`);
	} else {
		error.classList.add("error-message_visible");
	}
});

function validURL(str) {
	var pattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i"
	); // fragment locator
	return !!pattern.test(str);
}

function checkQrBox() {
	if (qrBox.firstElementChild) {
		qrBox.firstChild.remove();
		qrBox.lastChild.remove();
	}
}
