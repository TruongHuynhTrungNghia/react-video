import axios from 'axios';
const KEY = 'AIzaSyBRdiCsmFx4wBoUxGSQ_ZVWUZL3Hflg6EQ';

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
   }
});