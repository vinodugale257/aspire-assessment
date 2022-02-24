const axios = require('axios');

export async function getAllCards() {

    const response = await axios.get('/api/cards');
    return response.data;
}

export async function createCard(data) {
    const response = await axios.post(`/api/card`, {card: data});
    return response.data;
}
