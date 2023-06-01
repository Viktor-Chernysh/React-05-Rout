import axios from 'axios';

const key = '060d5e1e50f049be3e01f09d9d9a7b1c';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
export const getMovies = async query => {
  try {
    const { data } = await axios.get(
      `/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const getTrending = async () => {
  const { data } = await axios.get(`/trending/movie/day?api_key=${key}`);
  return data;
};
export async function fetchMoviesDetails(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${key}&language=en-US&append_to_response=reviews,credits`
  );
  return data;
}
