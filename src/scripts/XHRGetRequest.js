const XHRGetRequest = (url, responseType = 'json') => {
	const promise = new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);

		xhr.responseType = responseType;

		xhr.onload = () => {
			resolve(xhr.response);
		}

		xhr.onerror = () => {
			reject(xhr.response);
		}

		xhr.send();
	});
	return promise;
}

export default XHRGetRequest;