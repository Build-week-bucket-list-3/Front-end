import axios from 'axios';

export const axiosWithAuth = () => {
    const token = sessionStorage.getItem('token');

    return axios.create({
        baseURL: 'https://gcgsauce-bucketlist.herokuapp.com/',
        headers: {
            authorization: token
        }
    });
}