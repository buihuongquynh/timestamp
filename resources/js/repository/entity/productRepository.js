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
    createTimeOfDayNoCheckIn(payload){
        return Repository.post("/createTimeOfDayNoCheckIn",payload)
    },
    on_leave(payload){
        return Repository.post("/on-leave",payload)
    },
    edit_slow(id, payload){
        return Repository.put(`/on-leave/${id}`,payload)
    },
    detailSlow(id){
        return Repository.get(`/on-leave/${id}`)
    },
    listTimeSlow(payload){
        return Repository.get(`/slow-of-user/${payload}`)
    },
    deleteSlowItem(id){
        return Repository.delete(`/on-leave/${id}`)
    }
}