// Removes all content that is not under Latin

export default function ExtractLatinHTML(HTMLString) {
	// Return a string stating that no Latin was found, if that is true
	if (!new DOMParser().parseFromString(HTMLString, 'text/html').querySelector('#Latin')) {
		return new DOMParser().parseFromString('<h3>No Latin found</h3>', 'text/html');
	} else {
		// If not, split it by the h2 tag of Latin, getting everything after it, and returning the first child, which should be a div containing all of the Latin
		const partContainingLatin = HTMLString.split('<h2 id="Latin">Latin</h2>')[1];
		let fullLatinHTML = partContainingLatin.includes('<hr') ? partContainingLatin.split('<hr')[0] : partContainingLatin;

		// Return the HTML as HTML
		return new DOMParser().parseFromString(fullLatinHTML, 'text/html');
	}
}