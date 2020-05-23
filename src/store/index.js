import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

const IP_ADDRESS="192.168.43.166:"

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
    },
    mutations:{
    },
    actions:{
        LogIn(context,{loginData,success,fail}){
            Axios.post('http://'+IP_ADDRESS+'8084/75percent/web/login',loginData)
            .then(response => {
                success && success(response.data)
                })
                .catch(error => {
                    window.console.log(error)
                    fail && fail()
                })
        },
        Register(context,{registerData,success,fail}){
            Axios.post('http://'+IP_ADDRESS+'8084/75percent/web/register',registerData)
            .then(response => {
                success && success(response.data);               
                })
                .catch(error => {
                    window.console.log(error)
                    fail && fail()
                })
        },
        QRgenerate(context,{cipherText,success}){
            const ENCRYPTION_URL='http://'+IP_ADDRESS+'8083/75percent/secureQR/encryption/'
            const apiCall1=Axios.post(ENCRYPTION_URL+cipherText.teacherID);
            const apiCall2=Axios.post(ENCRYPTION_URL+cipherText.subjCode);
            const apiCall3=Axios.post(ENCRYPTION_URL+cipherText.dateToday);
            const apiCall4=Axios.post(ENCRYPTION_URL+cipherText.timeNow);
            Promise.all([apiCall1,apiCall2,apiCall3,apiCall4])
            .then(response =>{
                const encryptedText={
                    teacherID:response[0].data,
                    subjCode:response[1].data,
                    dateToday:response[2].data,
                    timeNow:response[3].data
                };
                return success && success(encryptedText);
            })
        }
    },
    getters:{
    },
    modules: {
    }
})