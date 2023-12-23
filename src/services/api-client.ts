import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e9a9444428204339b0d9093cd9456d52',
    }
})