import BaseService from "./BaseService";

export default class GithubUserService extends BaseService {
    constructor() {
        super("/users/lucasemn1");
    }
}