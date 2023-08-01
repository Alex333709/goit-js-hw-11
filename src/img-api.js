import axios from 'axios';

const API_KEY = '38571599-d8bb1b9f57ff42e3a0ab2e61e';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: page,
      },
    });

    if (response.status >= 400) {
      throw new Error('API error');
    }

    return response.data;
  } catch (error) {
    throw new Error('Error fetching images:', error);
  }
}
