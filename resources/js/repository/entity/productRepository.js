import Repository from '../repository';
const queryString = require('query-string');

export default{
    getTimeWorks(){
        return Repository.get('/timestamp')
    },
    getTimeUserWorks(payload){
        return Repository.get(`/time-of-user?${queryString.stringify(payload)}`)
    } 
}