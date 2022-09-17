/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

const pxbKey = '23848637-e957cc6ba41a4b75a0e32263e';

axios.defaults.baseURL = 'https://pixabay.com';

const fetchImages = ({ currentQuery = '', currentPage = 1, pageSize = 12 }) => {
  return axios
    .get(
      `/api/?q=${currentQuery}&page=${currentPage}&key=${pxbKey}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then(response => response.data.hits);
};

export default { fetchImages };
