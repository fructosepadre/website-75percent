import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
       loggedIn:'',
       registrationSuccess:'',
       loggingIn: false,
       accessToken: null,
    },
    mutations:{
        SET_AUTHENTICATION(state,loggingIn){
            state.authenticated=loggingIn;
        },
        SET_ACCESS_TOKEN: (state, accessToken) => {
            state.accessToken = accessToken;
        },
    },
    actions:{
        LogIn(context,{loginData,success,fail}){
            Axios.post('http://192.168.1.2:8084/75percent/web/login',loginData)
            .then(response => {
                success && success(response.data)
                })
                .catch(error => {
                    window.console.log(error)
                    context.commit('SET_ACCESS_TOKEN', null);
                    fail && fail()
                })
        },
        Register(context,{registerData,success,fail}){
            Axios.post('http://192.168.1.2:8084/75percent/web/register',registerData)
            .then(response => {
                success && success(response.data);               
                })
                .catch(error => {
                    window.console.log(error)
                    fail && fail()
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