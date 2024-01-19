import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formSearch = document.querySelector('.form-search');
const gallery = document.querySelector('.gallery');
const searchInput = document.querySelector('.picture-search-name');
const loaderContainer = document.querySelector('.loader-container');
const loadMoreButton = document.querySelector('.load-more-button');
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


let currentPage = 1;
const perPage = 40;
let searchQuery = '';

function showLoader() {
  loaderContainer.style.display = 'block';
}
function removeLoader() {
  loaderContainer.style.display = 'none';
}

async function searchImages(query, currentPage) {
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "41511305-1e730bfa7be67778e89c40f75";

  const requestParams = {
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: perPage,
  };

  const searchParams = new URLSearchParams(requestParams);

  showLoader();

try {
const response = await axios.get(`${BASE_URL}?${searchParams}`);

const { hits, totalHits } = response.data;
 
const galleryHtml = hits.reduce(
      (html, image) =>
        html +
        `<a class="gallery-link" href="${image.largeImageURL}">
            <img
                class="gallery-image"
                src="${image.webformatURL}"
                alt="${image.tags}"
            />
           <ul class="info-list">
              <li class="info-item">
                  <p class="info-title">Likes</p>
                  <p class="info-value">${image.likes}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Views</p>
                  <p class="info-value">${image.views}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Comments</p>
                  <p class="info-value">${image.comments}</p>
              </li>
              <li class="info-item">
                  <p class="info-title">Downloads</p>
                  <p class="info-value">${image.downloads}</p>
              </li>
            </ul>
        </a>`,
      ''
    );
    gallery.insertAdjacentHTML('beforeend', galleryHtml);
    lightbox.refresh();

 if (currentPage * perPage >= totalHits) {
      loadMoreButton.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } 
      loadMoreButton.style.display = 'block';
      const scrollImages = document
        .querySelector('.gallery-link')
        .getBoundingClientRect().height;
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth',
        });
        

  } 
  
  catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  }
  finally {
    removeLoader();
  }
}

formSearch.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';
  searchQuery = searchInput.value.trim();
  currentPage = 1;
  loadMoreButton.style.display = 'none';
  searchImages(searchQuery, currentPage);
  event.currentTarget.reset();
});

loadMoreButton.addEventListener('click', () => {
  currentPage += 1;
  searchImages(searchQuery, currentPage);
});