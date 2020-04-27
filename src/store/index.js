import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import swal from 'sweetalert'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{

    },
    mutations:{

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
          Register(context,{registerData}){
            return new Promise((resolve, reject) => {
            Axios.post('http://192.168.1.3:8084/75percent/web/register',registerData
            )
            .then(response => {
                if(response.data=="Duplicate")
                    swal("","You are already registered!","warning")
                else if(response.data=="Something Went Wrong")
                    swal("","Try Again!","warning")
                    else if(response.data=="Registered")
                        swal("","Registered","success")
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