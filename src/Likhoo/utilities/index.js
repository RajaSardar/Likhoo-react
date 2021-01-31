import axios from "axios";
import { endpoint } from "./API";


const login = (data) => {
    const apiKey = localStorage.getItem("authKey");
    if (apiKey) {
        return new Promise(async (resolve, reject) => {
            await axios.post(`${endpoint}/login`, data, { headers: { Authorization: apiKey } })
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    } else {
        return new Promise(async (resolve, reject) => {
            await axios.post(`${endpoint}/login`, data)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    }
}

const signup = (data) => {
    const apiKey = localStorage.getItem("authKey");
    if (apiKey) {
        return new Promise(async (resolve, reject) => {
            await axios.post(`${endpoint}/signup`, data, { headers: { Authorization: apiKey } })
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    } else {
        return new Promise(async (resolve, reject) => {
            await axios.post(`${endpoint}/signup`, data)
                .then((response) => resolve(response))
                .catch((err) => reject(err));
        });
    }
}

const postStory = (data) => {
    const apiKey = localStorage.getItem("authKey");
    return new Promise(async (resolve, reject) => {
        await axios.post(`${endpoint}/story`, data, {
            headers: { Authorization: apiKey }
        })
            .then((response) => resolve(response))
            .catch((err) => reject(err));
    })
}


export { login, signup, postStory } 