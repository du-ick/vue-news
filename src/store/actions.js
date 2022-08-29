import { 
    // fetchNewsList, 
    // fetchJobsList, 
    // fetchAskList, 
    fetchUserInfo, 
    fetchCommentItem,
    fetchList
} from '../api/index.js';

export default {
    // FETCH_NEWS(context) {
    //     fetchNewsList()
    //     .then(res => {
    //         context.commit('SET_NEWS', res.data);
    //         return res;
    //     })
    // },
    // FETCH_JOBS({ commit }) {
    //     fetchJobsList()
    //     .then(res => {
    //         commit('SET_JOBS', res.data);
    //     }).catch(err => console.log(err))
    // },
    // FETCH_ASK ({ commit }) {
    //     fetchAskList()
    //     .then(res => {
    //         commit('SET_ASK', res.data);
    //     }).catch(err => console.log(err))
    // },
    FETCH_USER ({commit}, userID) {
        fetchUserInfo(userID)
        .then(({ data }) => {
            commit('SET_USERINFO', data);
        }).catch(err=> console.log(err))
    },
    FETCH_ITEM({commit}, itemID) {
        fetchCommentItem(itemID)
        .then(res => {
            commit('SET_ITEM', res.data);
        }).catch(err => console.log(err))
    },
    FETCH_LIST({ commit }, pageName) {
        fetchList(pageName)
        .then(({data})=> {commit('SET_LIST', data); console.log(data)})
        .catch((err)=> console.log(err))
    }
}