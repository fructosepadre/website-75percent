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
        LogIn(context,{loginData}){
            return new Promise((resolve, reject) => {
            Axios.post('http://192.168.1.3:8084/75percent/web/login',loginData
            )
            .then(response => {
                if(response.data=="Wrong Credentials")
                    swal("","Wrong credentials!","warning")
                else if(response.data=="Create Account")
                    swal("","Create An Account?","warning")
                
                    else if(response.data=="Logged In")
                        swal("","Logged in","success")
                resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
            })
        },
        Register(context,{registerData,success}){
            return new Promise((resolve, reject) => {
            Axios.post('http://192.168.1.3:8084/75percent/web/register',registerData
            )
            .then(response => {
                context.commit('SET_REGISTRATION_SUCCESS_STATE',response.data);
                success(response.data);                

                if(response.data=="Something Went Wrong"){
                    swal("","Try Again!","warning")
                }

                resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
            })
        }

    },
    getters:{
    },
    modules: {
    }
})