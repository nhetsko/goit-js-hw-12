import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const formSearch = document.querySelector('.form-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoad = document.querySelector('.btn');
const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

let page = 1;
let limit = 40;

formSearch.addEventListener('submit', onSearch);

async function onSearch(event) {
    event.preventDefault();
    listImages.innerHTML = " ";
    const inputValue = event.target.elements.search.value;
    loader.style.display = 'block';

    try {
        const picture = await getPictures(inputValue);
        const totalPages = Math.ceil(picture.totalHits / limit);

        if (page > totalPages) {
            loader.style.display = 'none';
            return iziToast.error({
                position: "topRight",
                message: "We're sorry, but you've reached the end of search results"
            });
        }

        createGalleryMarkup(picture);

        page += 1;

        if (page > 1) {
            btnLoad.textContent = 'Loading images, please wait...';
        }
        lightbox.refresh();
    } catch (error) {
        loader.style.display = 'none';
        console.log(error);
    }
    formSearch.reset();
}

async function getPictures(name) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '41511305-1e730bfa7be67778e89c40f75';

    const searchParams = new URLSearchParams({
        key: KEY,
        q: name,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: limit,
        page: page
    });

    const response = await axios.get(`${BASE_URL}?${searchParams}`);

    return response.data;
}

function createGalleryMarkup(picture) {
    const markup = picture
        .hits
        .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
            `<li class="gallery-item">
              <a class="gallery-link" href="${largeImageURL}">
                <img
                  class="gallery-image"
                  src="${webformatURL}"
                  alt="${tags}"
                  width="360"
                />
              </a>
              <div class="thumb-block">
                <div class="block">
                  <h2 class="tittle">Likes</h2>
                  <p class="amount">${likes}</p>
                </div>
                <div class="block">
                  <h2 class="tittle">Views</h2>
                  <p class="amount">${views}</p>
                </div>
                <div class="block">
                  <h2 class="tittle">Comments</h2>
                  <p class="amount">${comments}</p>
                </div>
                <div class="block">
                  <h2 class="tittle">Downloads</h2>
                  <p class="amount">${downloads}</p>
                </div>
              </div>
            </li>`)
        .join('');
    listImages.insertAdjacentHTML('beforeend', markup);
}
