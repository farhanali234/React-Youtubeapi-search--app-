import axios from 'axios';
const KEY = 'AIzaSyAuTLYd9xNlXtwoNik2bt_ZRufZA0tPUiQ';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type: 'video',
        maxResults:5,
        key:KEY


    }

});