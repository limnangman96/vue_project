import { fetchNewsList, fetchAskList, fetchJobsList, fetchList, fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
    // FETCH_NEWS({ commit }) {
    //     return fetchNewsList() //왜 return 값을 내려주나? ListMixin.js에서 .then() 으로 chaining을 해주려면 retrun내려줘야함
    //         .then(({ data }) => {
    //             commit("SET_NEWS", data)
    //             return data;
    //         })
    //         .catch(error => console.error(error))
    // },
    // FETCH_ASK({ commit }) {
    //     return fetchAskList()
    //         .then(({ data }) => {commit("SET_ASK", data)})
    //         .catch(error => console.error(error))
    // },
    // FETCH_JOBS({ commit }) {
    //     return fetchJobsList()
    //         .then(({ data }) => commit("SET_JOBS", data))
    //         .catch(error => console.error(error))
    // },
    // FETCH_USER({ commit }, name) {
    //     return fetchUserInfo(name)
    //         .then(({ data }) => commit("SET_USER", data))
    //         .catch(error => console.error(error))
    // },
    // FETCH_ITEM({ commit }, id) {
    //     return fetchItemInfo(id)
    //     .then(({ data }) => commit("SET_ITEM", data))
    //     .catch(error => console.error(error))
    // },
    // // #2 실행순서
    // FETCH_LIST({ commit }, pageName) {
    //     // #3 실행순서
    //     return fetchList(pageName)
    //     // #4 실행순서
    //     .then(response => {
    //         commit("SET_LIST", response.data)
    //         return response;
    //     })
    //     .catch(error => console.error(error))
    // },

    // Async
    async FETCH_NEWS({ commit }) {
        try {
            const response = await fetchNewsList();
            commit("SET_NEWS", response.data);
            return response;
        }
        catch (error) {
            console.error(errpr)
        }
    },
    async FETCH_ASK({ commit }) {
        const response = await fetchAskList();
        commit("SET_ASK", response.data)
        return response;
    },
    async FETCH_JOBS({ commit }) {
        const response = await fetchJobsList();
        commit("SET_JOBS", response.data);
        return response;
    },

    async FETCH_USER({ commit }, name) {
        const response =  await fetchUserInfo(name);
        commit("SET_USER", response.data);
        return response;
    },
    async FETCH_ITEM({ commit }, id) {
        const response = await fetchItemInfo(id)
        commit("SET_ITEM", response.data)
        return response;
    },
    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit("SET_LIST", response.data);
        return response;
    }
}