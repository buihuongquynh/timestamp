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
    listTimeSlow(id,page){
        return Repository.get(`/slow-of-user/${id}?page=${page}`)
    },
    deleteSlowItem(id){
        return Repository.delete(`/on-leave/${id}`)
    },
    getAllLeave(payload){
        return Repository.get(`get-all-leave?page=${payload}`)
    },
    changeStatus(payload){
        return Repository.post(`/change-status/${payload}`)
    },
    getProfile(id){
        return Repository.get(`/profile/${id}`)
    },
    editProfile(id, payload){
        return Repository.put(`/profile/${id}`, payload)
    },
}