import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
const cardsMarkup = createGallery(galleryItems);

galleryList.insertAdjacentHTML('beforeend', cardsMarkup);

galleryList.addEventListener('click', onGalleryItemsClick);

function createGallery(galleryItems) {
  return galleryItems
    .map(galleryItem => {
      const { preview, original, description } = galleryItem;
      return `
		<div class="gallery__item">
  	  <a class="gallery__link" href="large-image.jpg">
    		<img
					class="gallery__image"
					src="${preview}"
					data-source="${original}"
					alt="${description}"
    		/>
  		</a>
		</div>`;
    })
    .join('');
}

function onGalleryItemsClick(evt) {
  onLinkPreventDefaultClick(evt);
  const originalImageSize = evt.target.dataset.source;
  const imageDescription = evt.target.alt

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const modal = basicLightbox.create(`
		<img src = '${originalImageSize}' alt = '${imageDescription}' width="1280"/>
	`);
  modal.show();

  document.addEventListener('keydown', evt => {
    if (evt.code !== 'Escape') {
      return;
    }
    modal.close();
  });
  console.log('onGalleryItemsClick', evt.target)
}

function onLinkPreventDefaultClick(evt) {
  evt.preventDefault();
}
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
//
//
//
// I создание функции - РЕНДЕРИНГ КОЛЛЕКЦИИ
// 1. Выполняю поиск эл-та для дальнейщшй работы с ним - querySelector('.gallery')
// Добавляю функцию для работы с интерфейсом (создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону)
//
// 2. деструктуризация массива обьектов в параметре метода map() - или 2 способ (деструктуризация в сигнатуре функции) - .map(({ preview, original, description }) => ...
//
// 3. Прописую в функции шаблон  HTML-разметки(которую необходимо добавить), подставляя (интерполируя) в нее свойства обектов
//
// 4. С помощью insertAdjacentHTML() - вставляю разметку в базовую разметку
//
// 5. Использую:
// - метод map() - для работы с обьектом => возвращает массив свойств
// - метод join('') - из массива элементов получаю  => строчные элементы
//
// II
// 6. Делегирование(для коллекции) - galleryList.addEventListener('click', onGalleryListClick)
// создание однотипной задачи для однотипных элементов
// т.е.вешаем обработчик событий на общего предка(родителя), но ловить события будем на самих однотипных элементах коллекции
//
// 7. Ловим событие ТОЛЬКО при клике на картинку <img class="gallery__link">:
// const isImage = evt.target.classList.contains('gallery__link'); if (!isImage) {}
// if (!isImage)
//
// 8. preventDefault() - функция отмены действия браузера по умолчанию (при клике по ссылке - не будет переходить на новый адрес href, при отправке формы - не будет перезагружать текущую страницу)
//
// 9.Открытие модального окна по клику на элементе галереи - использую библиотеку basicLightbox
//
// 10. Подключаю библиотеку basicLightbox (готовая разметка модального окна с изображением из примеров):
// - в HTML-разметку <head> => <link cdnjs.basicLightbox.min.js>
// - в HTML-разметку перед закрывающим тегом </body> => <script src="https://cdnjs.basicLightbox.min.js>
//
// 11. В модальное окно:
// - добавляю HTML-разметку(шаблонную строку), которая будет висеть на нем при вызове модального окна
// - подставляю значение атрибута src элемента (путь к оригинальному размеру картинки) <img src="${selectedImage}"
//  create(`<img src = '${evt.target.dataset.source}' alt = '${evt.target.alt}'/>`)
//
// 12. "keydown"(данное событие клавиатуры срабатывает на всех клавишах клавиатуры, ВКЛЮЧАЯ СЛУЖЕБНЫЕ) - document.addEventListener("keydown", ...) - ВЕШАЕТСЯ НА document...
//
// 13. Вызываю метод "ОТКРЫТЬ МОД ОКНО" - show() на элементе modal => modal.show()
// const modal = basicLightbox.create(`<img src="" alt=""/>`);
// modal.show();
//
// 14. Вешаю слушатель события на document для прослушивания события на клавиатуре - "keydown" => document.addEventListener("keydown", ...)
//
// 15. ligthBoxShow.close() - на обработчике событий создаю функцию для закрытия модального окна - evt => {}, если нажать ESCAPE - if (evt.code !== 'Escape') {return}
// evt.code - возвращает код клавиши, котрый был введен пользователем
// document.addEventListener("keydown", evt => {
//   if (evt.code !== 'Escape') {
//     return; };
//   modal.close()
// })
