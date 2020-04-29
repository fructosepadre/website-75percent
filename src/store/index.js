import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
       loggedIn:'',
       registrationSuccess:'',
    },
    mutations:{
        SET_LOGGED_IN_STATE(state,loggedIn){
            state.loggedIn=loggedIn;
        },
        SET_REGISTRATION_SUCCESS_STATE(state,registrationSuccess){
            state.registrationSuccess=registrationSuccess;
        }
    },
    actions:{
        LogIn(context,{loginData,success}){
            return new Promise((resolve, reject) => {
            Axios.post('http://192.168.1.3:8084/75percent/web/login',loginData)
            .then(response => {
                context.commit("SET_LOGGED_IN_STATE",response.data)
                success && success(response.data)
                if(response.data=="Wrong Credentials"){
                    swal("","Wrong credentials!","warning")}
                else if(response.data=="Logged In"){
                    swal("","Logged in","success")}
                resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        Register(context,{registerData,success}){
            return new Promise((resolve, reject) => {
            Axios.post('http://192.168.1.3:8084/75percent/web/register',registerData)
            .then(response => {
                context.commit('SET_REGISTRATION_SUCCESS_STATE',response.data)
                success && success(response.data);               

                if(response.data=="Something Went Wrong"){
                    swal("","Try Again!","warning")
                }

                resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        async QRgenerate(context,{cipherText,success}){
            const apiCall1=Axios.post('http://192.168.1.3:8083/75percent/secureQR/encryption/'+cipherText.teacherID);
            const apiCall2=Axios.post('http://192.168.1.3:8083/75percent/secureQR/encryption/'+cipherText.subjCode);
            const apiCall3=Axios.post('http://192.168.1.3:8083/75percent/secureQR/encryption/'+cipherText.dateToday);
            const apiCall4=Axios.post('http://192.168.1.3:8083/75percent/secureQR/encryption/'+cipherText.timeNow);
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