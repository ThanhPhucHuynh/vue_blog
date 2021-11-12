const axios = require('axios')

export default {
    getHeaders() {
        let token = window.localStorage.getItem('token');
        if (token == null ) {
            return {}
        } return { Authorization: 'Bearer ' + token }
    },
    get(url) {
        return axios.get(url, { headers: this.getHeaders() })
    },
    post(url, data) {
        return axios.post(url, data, { headers: this.getHeaders() })
    },
    delete(url, data) {
        return axios.delete(url, data, { headers: this.getHeaders() })
    }
}