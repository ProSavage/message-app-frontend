import axios from "axios";

const authenticatedAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        "Authorization": "Bearer " + window.localStorage.getItem("TOKEN")
    }
})

const authAxios = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})


export const authAPI = () => {
    return {
        login: async (email: string, password: string) => {
            const req = await authAxios.post("/auth/login", {
                email,
                password
            })
            return req.data;
        },
        signup: async (username: string, email: string, password: string) => {
            const req = await authAxios.post("/auth/signup", {
                username,
                email,
                password
            })
            return req.data;
        }
    }

}
