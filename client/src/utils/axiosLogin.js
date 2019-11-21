import axios from 'axios';

export const axiosLogin = () => {
    return axios.create({
        baseURL: "https://bw-bucketlist.herokuapp.com/api",
        headers: {
            "Authorization": `Basic ${btoa('lambda-client:lambda-secret')}`,
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
}
