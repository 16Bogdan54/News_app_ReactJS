import axios from "axios";

export const getData = (url: string) => {
    return axios
        .get(url)
        .then((r) => r.data)
        .catch((err) => console.log(JSON.stringify(err)));
};