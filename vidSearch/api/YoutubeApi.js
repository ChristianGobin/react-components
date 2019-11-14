import axios from 'axios';
const KEY = 'AIzaSyARVTgVJSjZ9jZ9uy2vOEpuC5rOFrW-HZE'
const YoutubeApi = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
export default YoutubeApi;
