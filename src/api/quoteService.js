import axios from "axios";

export const getQuoteOfDay = () => axios.get('https://favqs.com/api/qotd');

export const searchQuotes = (data) => axios.get(`https://favqs.com/api/quotes/?filter=${data}`);