import axios from "axios";
const baseURL='https://api-football-v1.p.rapidapi.com/v3'

export const axiosInstance=axios.create({
    baseURL:baseURL,
    timeout:5000,
    headers:{
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "5cd111ac4bmsh54c7b075217b5abp116193jsne0a526846336"
    }

})