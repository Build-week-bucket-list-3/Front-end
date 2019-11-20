import axios from 'axios';

export const axiosLogin = () => {
    return axios.create({
        baseURL: "https://gcgsauce-bucketlist.herokuapp.com/",
        headers: {
            "Authorization": `Basic ${btoa('lambda-client:lambda-secret')}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
}
