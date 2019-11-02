import React from 'react';
import axios from 'axios';

export const YoutubeApi = axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/videos`
})