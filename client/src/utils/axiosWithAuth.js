import axios from 'axios';

export const axiosWithAuth = () => {
    const token = `Bearer ${sessionStorage.getItem('token')}`;

    return axios.create({
        baseURL: 'https://gcgsauce-bucketlist.herokuapp.com/',
        headers: {
            "Authorization": token
        }
    });
}