import axios from "axios";

const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}

// function fetchNewsList() {
//     return axios.get(`${config.baseUrl}news.json`);
// }
// function fetchJobsList() {
//     return axios.get(`${config.baseUrl}jobs.json`);
// }
// function fetchAskList() {
//     return axios.get(`${config.baseUrl}ask.json`);
// }
function fetchList(pageName){
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}

function fetchUserInfo(userId) {
    return axios.get(`${config.baseUrl}user/${userId}.json`)
}

function fetchCommentItem(itemId) {
    return axios.get(`${config.baseUrl}item/${itemId}.json`)
}



export {
    // fetchAskList, 
    // fetchNewsList, 
    // fetchJobsList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
};