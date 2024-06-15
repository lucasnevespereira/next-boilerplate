import "server-only"

import {config} from "@/config";
import axios, {Axios} from "axios";
import {User} from "@/types/user";

class Server {
    private axios: Axios;

    constructor(url: string, apiKey: string) {
        this.axios = axios.create({
            baseURL: url
        })
        // if your backend server has an API key, you can set it here
        // this.axios.defaults.headers.common['x-api-key'] = apiKey;
    }

    async getUser(id: string) {
        return this.axios.get(`/users/${id}`);
    }

    async updateUser(id: string, data: User) {
        return this.axios.put(`/users/${id}`, data);
    }

    async patchUser(id: string, data: Partial<User>) {
        return this.axios.patch(`/users/${id}`, data);
    }

    async deleteUser(id: string) {
        return this.axios.delete(`/users/${id}`);
    }

    async getUserSubscription(id: string) {
        return this.axios.get(`/users/${id}/subscription`);
    }

    async createSubscription(customerId: string) {
        return this.axios.post(`/customers/${customerId}/subscription`, {});
    }

    async deleteSubscription(customerId: string) {
        return this.axios.delete(`/customers/${customerId}/subscription`);
    }
}


export const backendServer = new Server(config.server.url, config.server.apiKey);