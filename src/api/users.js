import axios from "axios";

export const getAll = async () => {
    let url = "https://api.github.com/search/users";

    return await axios.get(url).then(({ data }) => data)
};

export const getOneByName = async ({filters}) => {
    const url = `https://api.github.com/search/users?q=${filters.name}`

    return await axios.get(url).then(({ data }) => data)
};