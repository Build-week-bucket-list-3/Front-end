import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://gcgsauce-bucketlist.herokuapp.com/',
        headers: {
            authorization: sessionStorage.getItem('token')
        }
    });
}