import axios from "axios";

export const getQuoteOfDay = () => axios.get('https://favqs.com/api/qotd');

export const getQuotes = (data) => axios.get(`https://favqs.com/api/quotes/?filter=${data}`, {
  headers: {
    Authorization: 'Token token="016060352ddb08c71ec35ac83d97dfa3"'
  }
});