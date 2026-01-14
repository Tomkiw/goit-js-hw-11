// У файлі render-functions.js створи екземпляр SimpleLightbox для роботи з модальним вікном та зберігай функції для відображення елементів інтерфейсу:

// import { spread } from "axios"
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
 
let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images.map(
      image =>
        `<li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img 
          class="gallery-image" 
          src="${image.webformatURL}" 
          alt="${image.tags}" 
        />
      </a>

      <div class="inf-container">
  <ul class="inf-list">
    <li class="inf-item">
      <h3>Likes</h3>
      <span>${image.likes}</span>
    </li>

     <li class="inf-item">
      <h3>Views</h3>
      <span>${image.views}</span>
    </li>

     <li class="inf-item">
      <h3>Comments</h3>
      <span>${image.comments}</span>
    </li>

     <li class="inf-item">
      <h3>Downloads</h3>
      <span>${image.downloads}</span>
    </li>

  </ul>
</div>
      </li>`
    ).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export const showLoader = () => {
  // Припускаємо, що у CSS є клас .is-hidden або подібний, або ми просто видаляємо display: none
  // Тут приклад, якщо ми додаємо клас, який робить його видимим, або прибираємо hidden
  loader.classList.remove('is-hidden');
};

export const hideLoader = () => {
  loader.classList.add('is-hidden');
};
