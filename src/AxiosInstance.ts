import axios from "axios";


export let API_BASE_URL: string = ""

export const setAPIURL = (url: string) => {
    console.log("Set API URL: " + url)
    API_BASE_URL = url
}

const authenticatedAxios = (token: string) => {
    const instance = axios.create({
        baseURL: API_BASE_URL,
        headers: {
            "Authorization": token
        }
    })

    instance.interceptors.response.use((response) => {
        if (!response.data.success && response.data.message === "You aren't authorized to use this endpoint.") {
            window.localStorage.removeItem("TOKEN")
            window.location.href = "/"
        }
        return response;
    }, error => {
        // handle the response error
        return Promise.reject(error);
    });

    return instance;
}


const authAxios = axios.create({
    baseURL: API_BASE_URL
})

export const messagingAPI = () => {



    return {
        getContacts: async (token: string) => {
            const req = await authenticatedAxios(token).get("/contacts/all")
            return req.data
        },
        searchContacts: async (token: string, query: string) => {
            const req = await authenticatedAxios(token).post("/contacts/search", {
                query
            })
            return req.data
        },
        addContact: async (token: string, username: string) => {
            const req = await authenticatedAxios(token).post("/contacts/add", {
                username
            })
            return req.data
        }
    }
}




export const authAPI = () => {
    return {
        validate: async (token: string) => {
            const req = await authAxios.post("/auth/validate", {
                token
            })
            return req.data
        },
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
