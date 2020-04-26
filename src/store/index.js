import Vue from 'vue'
import Vuex from 'vuex'
//  import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{

    },
    mutations:{

    },
    actions:{
        LogIn(context,logInData){
            window.console.log(logInData)
            // axios.post('http://172.16.20.131:8087/contest/addStaticContest',data)
            // .then(response => {
            //   window.console.log('getting into axios')
            //   window.console.log(response);
            //   if(response=="yes")
            //     this.$alert('Quiz created')
            //   // success && success();
            // });
          
          },
          Register(context,registerData){
              window.console.log(registerData)
          }

    },
    getters:{

    },
    modules: {
    }
})