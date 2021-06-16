import axios from "axios";

export default class BaseService {
    connection;
    endpoint;

    constructor(endpoint) {
        this.endpoint = endpoint;

        this.connection = axios.create({
            baseURL: "https://api.github.com/"
        });
    }

    async getOne() {
        try {
            const response = await this.connection.get(this.endpoint);
            return { response, data: response.data };
        } catch (err) {
            throw { response: err.response, data: err.response.data };
        }
    }
}