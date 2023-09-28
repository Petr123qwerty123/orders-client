import axios from "axios";

export default class OrdersService {
    static #url = 'http://10.255.16.185:8000';

    static async getById(id) {
        const response = await axios.get(`${this.#url}/orders/${id}`);

        return response;
    }
}