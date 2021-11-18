import axios from 'axios';

const config = {
    baseUrl: "https://api.hnpwa.com/v0/"
}

function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

async function fetchAskList() {
    try {
        return await axios.get(`${config.baseUrl}ask/1.json`);
    }
    catch (error) {
        console.error(error);
    }
}

async function fetchJobsList() {
    try {
        return await axios.get(`${config.baseUrl}jobs/1.json`);
    }
    catch (error) {
        console.error(error);
    }
}

async function fetchList(pageName) {
    try {
        return await axios.get(`${config.baseUrl}${pageName}/1.json`);
    }
    catch (error) {
        console.error(error);
    }
}

async function fetchUserInfo(userName) {
    try {
        return await axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    }
    catch (error) {
        console.error(error);
    }
}

async function fetchItemInfo(id) {
    try {
        return await axios.get(`https://api.hnpwa.com/v0/item/${id}.json`);
    }
    catch (error) {
        console.error(error);
    }
}


export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchList,
    fetchUserInfo,
    fetchItemInfo
}