import React from 'react';

import ExtractLatinHTML from './ExtractLatinHTML';

export default function FormatCurrentElements({ HTML }) {
	let formattedHTML = HTML;

	if (!formattedHTML) {
		return <h3>No Latin found</h3>
	} else {
		// Get only the Latin translations
		formattedHTML = ExtractLatinHTML(formattedHTML.documentElement.outerHTML)[0];

		// HTML can now be manipulated

		// Get all HTML elements on the page
		const htmlBody = formattedHTML.body;
		const allElements = htmlBody.getElementsByTagName('*');

		// Do this for every element
		for (let i = 0; i < allElements.length; i++) {
			const currElement = allElements[i];

			// Remove all styles from every element
			currElement.removeAttribute('style');

			if (currElement.innerText === 'Latin') {
				currElement.remove();
			}

			if (currElement.tagName.toLowerCase() === 'h4' || currElement.tagName.toLowerCase() === 'h3' || currElement.tagName.toLowerCase() === 'h2') {
				currElement.style.fontFamily = 'Merriweather';
				currElement.style.fontWeight = '900';
				if (currElement.tagName.toLowerCase() === 'h3') currElement.style.fontSize = '1.2rem';
				currElement.style.filter = 'opacity(0.9)';
				// `<span style="font-family: 'Merriweather'; font-weight: 900; font-size: 1.2rem; filter: opacity(0.9);">${subheading}</span>`;
			}

			if (currElement.tagName.toLowerCase() === 'th' || currElement.tagName.toLowerCase() === 'td' || currElement.tagName.toLowerCase() === 'table') {
				currElement.style.border = '2px solid var(--table)';
				currElement.style.borderCollapse = 'collapse';
				currElement.style.padding = '0.4rem';
			}

			if (currElement.tagName.toLowerCase() === 'a') {
				if (
					currElement.parentElement.lang.toLowerCase() === 'la' && !currElement.rel.includes('ExtLink') && currElement.rel.includes('WikiLink')
				) {
					currElement.href = `javascript:window['addWord']('^${currElement.title}')`;
					currElement.style.color = '#6190E6';
				} else {
					if (currElement.rel.includes('ExtLink')) {
						currElement.target = '_blank';
						currElement.style.color = '#6190E6';
						currElement.rel += ' noreferrer'
					} else {
						currElement.removeAttribute('href');
					}
				}
			}
		}

		// Set the formattedHTML to the string value of the HTML
		formattedHTML = htmlBody.innerHTML;

		return <div dangerouslySetInnerHTML={{ __html: formattedHTML }}></div>
	}
}