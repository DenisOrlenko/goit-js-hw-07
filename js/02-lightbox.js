import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector(".gallery")
const cardsMarkup = createGallery(galleryItems)
galleryList.insertAdjacentHTML("beforeend", cardsMarkup)

function createGallery(e) {
	return galleryItems
		.map(({preview, original, description}) => {
			return `
			<a
				class="gallery__item"
				href="${original}">
				<img
					class="gallery__image"
					src="${preview}"
					alt="${description}"
				/>
			</a>`
		})
		.join("")
}
const lightbox = new SimpleLightbox(".gallery__item", {
	captionsData: "alt", captionDelay: 250,
});

//
//
//
//
//
//
//
//
//
//
//
//
//
// 1. поиск элемента для работы с ним - querySelector(".gallery")
//
// 2. function createGallery(e) {} - создание и рендер разметки по массиву данных и предоставленному шаблону)
// - map() - перебираю массив обьектов => по отдельным обьектам
//
// - деструктуризирую свойста обьекта в параметре метода map()
//
// - join("") - обьединяет эл-ты массива => в строки по коннектору ("")
//
// - подставляю данные свойств массива в атрибуты элементов разметки:
//   <a href="${original}"> <img src="${preview}" alt="${description}"> */} */}
//
// 3. Вызов ф-ии createGallery(galleryItems) с аргументом galleryItems
//
// 4. вызов ф-ии присваиваю переменной - cardsMarkup
//
// 5. galleryList.insertAdjacentHTML("beforeend", cardsMarkup) - добавление разметки в базовую разметку эл-та galleryList
//
// 6. Подключение скрипта и стилей библиотеки используя - сервис cdnjs (<link rel> <script src)
//
// 7. SimpleLightbox - добавляю опции модального окна при отображении картинки
// - отображение подписи из атрибута alt = "Alpine Mountains"  =>  (captionsData: "alt")
// - задержка отображения подписи (captionDelay: 250)

