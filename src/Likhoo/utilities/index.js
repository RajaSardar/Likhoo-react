import axios from "axios";


const login = (data) => {
    const apiKey = localStorage.getItem("authKey");
    if (apiKey) {
        return new Promise(async (resolve, reject) => {
            await axios.post(`${process.env.SERVER}/login`, data, { headers: { Authorization: apiKey } })
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    } else {
        return new Promise(async (resolve, reject) => {
            await axios.post(`${process.env.SERVER}/login`, data)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    }
}

const signup = (data) => {
    const apiKey = localStorage.getItem("authKey");
    if (apiKey) {
        return new Promise(async (resolve, reject) => {
            await axios.post(`${process.env.SERVER}/signup`, data, { headers: { Authorization: apiKey } })
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    } else {
        return new Promise(async (resolve, reject) => {
            await axios.post(`${process.env.SERVER}/signup`, data)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    }
}


export { login, signup } 