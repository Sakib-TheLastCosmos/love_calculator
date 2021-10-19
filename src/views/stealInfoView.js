import { DOMString } from "../config/base";
import { markups } from "../config/markup"

const stringToHTML = function (str) {
	var parser = new DOMParser();
	var doc = parser.parseFromString(str, 'text/html');
	return doc;
};

const getFirstName = name => {
   name = name.split(' ')[0]
   return name
}


export const renderLoveResult = (parent, markup, user, crush) => {
   let mainMarkup = ''

   markup = stringToHTML(markup)
   Array.from(markup.querySelectorAll(DOMString.headers))[0].textContent = user.name
   Array.from(markup.querySelectorAll(DOMString.headers))[1].textContent = crush.name

   markup.querySelector(DOMString.compatibilityText).textContent = `${getFirstName(user.name)} + ${getFirstName(crush.name)}`

   markup = markup.querySelector('html')

   // create link button
   markup.querySelector(DOMString.compatibilityText).insertAdjacentHTML('beforeend', markups.zodiacLabel)
   markup.querySelector(DOMString.zodiacLabel).textContent = `${user.birthday.zodiac} + ${crush.birthday.zodiac}`


   markup.querySelector(DOMString.boxBeforeLink).insertAdjacentHTML('beforebegin', markups.homeLinkBtn)

   parent.innerHTML = markup.innerHTML
}