import Repository from '../repository';
const queryString = require('query-string');

export default{
    getTimeWorks(){
        return Repository.get('/timestamp')
    },
    getTimeId(id){
        return Repository.get(`/timestamp/${id}`)
    },
    getTimeUserWorks(payload){
        return Repository.get(`/time-of-user?${queryString.stringify(payload)}`)
    } ,
    getTimeEdit(payload){
        return Repository.get(`/list-edit-time?${queryString.stringify(payload)}`)
    },
    createTimeEdit(payload){
        return Repository.post("/create-edit-time",payload)
    },

}