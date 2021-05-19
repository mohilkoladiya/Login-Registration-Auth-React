import axios from "axios";

const api = "http://4118dc6cd012.ngrok.io"

export class ApiService {

    async getMethod(url, data, cancelToken, headers) {
        const config = {
            headers: {
                ...(headers || {}),
            },
        };
        let resData = '';
        const response = await axios.get(url, data, config).catch((err) => {
            resData = { error: 'something went wrong' };
        });
        return resData || response.data;
    }

    async postMethod(url, data, headers, cancelToken) {
        const config = {
            headers: {
                ...(headers || {}),
                // 'content-type': 'application/x-www-form-urlencoded',
            },
        };
        if (cancelToken && cancelToken.token) {
            config.cancelToken = cancelToken.token;
        }
        let resData = '';
        const response = await axios.post(url, data, config).catch(thrown => {
            if (thrown.toString() === 'Cancel') {
                resData = 'cancel';
            } else {
                resData = { error: 'something went wrong' };;
            }
        });
        return resData || response.data;
    }

    async putMethod(url, data, headers) {
        const config = {
            headers: {
                ...(headers || {}),
            }
        };
        let resData = '';
        const response = await axios.put(url, data, config).catch(err => {
            resData = { error: 'something went wrong' };
        });
        return resData || response.data;
    }

    async deleteMethod(url, headers) {
        const config = {
            headers: {
                ...(headers || {})
            },
        };
        let resData = '';
        const response = await axios.delete(url, config).catch(err => {
            resData = { error: 'something went wrong' };
        });
        return resData || response.data;
    }

    async clusterById(url, headers) {
        const config = {
            headers: {
                ...(headers || {})
            }
        }
        let resData = ''
        const response = await axios.get(url, config).catch(err => {
            resData = { error: 'Something went wrong' };
        });
        return resData || response.data;
    }


    async createRegistration(payload) {
        return await this.postMethod(`${api}/api/user/register`, payload);
    }
    async login(payload) {
        return await this.postMethod(`${api}/api/user/login`, payload);
    }
}
export default ApiService