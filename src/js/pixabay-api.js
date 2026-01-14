// У файлі pixabay-api.js зберігай функції для виконання HTTP-запитів:

// getImagesByQuery(query). Ця функція повинна приймати один параметр query (пошукове слово, яке є рядком), здійснювати HTTP-запит і повертати значення властивості data з отриманої відповіді.
//Your API key: 54182222-bc9f62244d35838f397753c37

import axios from 'axios';

export function getImagesByQuery(query) {
  const API_KEY = '54182222-bc9f62244d35838f397753c37';
  const BASE_URL = 'https://pixabay.com/api/';
  const searchParams = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 9,
    },
  };

  // робимо запит через Axios
  return axios.get(BASE_URL, searchParams).then(response => {
    return response.data;
  });
}

// console.log(getImagesByQuery("dog"));
