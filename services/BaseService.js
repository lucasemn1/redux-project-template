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
}