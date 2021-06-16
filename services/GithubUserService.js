import BaseService from "./BaseService";

export default class GithubUserService extends BaseService {
    constructor() {
        super("users");
    }

    async getOne(username) {
        try {
            const response = await this.connection.get(`/${this.endpoint}/${username}`);
            return { response, data: response.data };
        } catch (err) {
            throw { response: err.response, data: err.response.data };
        }
    }
}