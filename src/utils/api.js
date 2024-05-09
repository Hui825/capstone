import axios from "axios";

export const BASE_URL = 'https://TradMarket-v31.p.rapidapi.com'

const options = {
    params: {
        maxResults: '48',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'TradMarket-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async(url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
