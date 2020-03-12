import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://wicked-quiz.firebaseio.com/'
});


export default instance;