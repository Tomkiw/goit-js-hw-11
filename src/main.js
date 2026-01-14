import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// FUNCTION
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const input = event.target.querySelector('input');
  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
    });
    return;
  }
  // 1. підготовка інтерфейсу
  clearGallery();
  showLoader();

  // 2. запит на сервер
  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      // Якщо картинки є — рендеримо їх
      createGallery(data.hits);
    })
    .catch(error => {
      console.error(error);
      iziToast.error({
        message: 'Something went wrong! Please try again later.',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();

      form.reset();
    });
});
