import axios from "axios";

const getWordApi = async (word) => axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

export {
    getWordApi
}