import axios from 'axios';

const animalsAxios = axios.create({
    baseURL: 'https://wicked-quiz.firebaseio.com/'
});
//hujnia
const moviesAxios = axios.create({
    baseURL: "https://imdb8.p.rapidapi.com/title/get-top-rated-movies",
    headers: {"x-rapidapi-host": "imdb8.p.rapidapi.com",
	"x-rapidapi-key": "c59856c354mshf45ce153a841a6dp13fcf4jsn9531738fe747"}
})

export {animalsAxios, moviesAxios,};