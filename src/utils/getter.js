import axios from 'axios';

export async function getter(name, page) {
  const key = '27914818-5e05e7f617900cef74ea356f6';

  return axios.get(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
  );
}
