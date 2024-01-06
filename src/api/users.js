import axios from "axios";

export const getAll = async () => {
    let url = "https://api.github.com/search/users?q=juanito";

    return await axios.get(url).then(({ data }) => data)
};

export const getOne = async ({ name }) => {
    const url = `https://api.github.com/search/users?q=${name}`

    return await axios.get(url).then(({ data }) => data)
};