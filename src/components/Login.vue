<template>
    <div id="app">
        <div class="page-body">
            <form @submit.prevent="login">
            <md-field md-clearable>
                <label>Teacher ID/SRM Email ID</label>
                <md-input v-model="userName"></md-input>
            </md-field>
            <br>
            <md-field>
                <label>Password</label>
                <md-input v-model="passWord" type="password"></md-input>
            </md-field>
            <br>
            <b-button pill type="submit" variant="warning" @click="validateLogIn">Log-In</b-button>
            <br>
            <br>
            </form>
    </div>
    </div>    
</template>
<script>
import swal from 'sweetalert'
export default {
    data: () => ({
      userName:'test',
      passWord:'123',
      userNameStatus:false,
      passWordStatus:false
    }),
    methods:{
        validateTeacherID: function(){
            if(this.userName.length==0)
                return swal("","Fill in Teacher ID or SRM Email ID","warning");
            else
                this.userNameStatus=true 
        },
        validatePassWord: function(){
            if(this.passWord.length==0)
                return swal("","Fill in password","warning");
            else
                this.passWordStatus=true 
        },
        validateLogIn: function(){
            this.validatePassWord(),
            this.validateTeacherID()
        },
        login: function() {
            const loginData={
                identifier:this.userName,
                password:this.passWord
            }
            if(this.userNameStatus==true && this.passWordStatus==true)
                this.$store.dispatch('LogIn',{loginData,success:this.onLogInSuccess,fail:this.onLogInFail})
        },
        onLogInFail(){
            return swal("","Something went Wrong. Try again.... :(","warning")
        },
        onLogInSuccess(response){
            if(response=="Logged In"){
                this.$store.commit("SET_AUTHENTICATION",true)
                localStorage.setItem('accessToken', response);
                this.$store.commit('SET_ACCESS_TOKEN', response);
                return swal("","Logged in","success").then(()=>{this.$router.push('/qr-generate');})
            }
            else if(response=="Wrong Credentials"){
                return swal("","Wrong credentials!","warning")
            }
            else if(response=="Create Account"){
                return swal("",
                "Not a registered user. Create an account?",
                "warning",
                {
                    buttons: {
                        confirm: {
                          text: "Create",
                          value: "Create",
                        },                            
                        cancel: true
                    },
                }
                ).then((value)=> {
                    switch (value) {
                        case "Create":
                            this.$router.push('/register');
                    }
                });
            }
        }
    }
}
</script>
<style scoped>
#app{
    display: flex;
    justify-content: center;
    padding-top: 20px;
}
.page-body{
    padding-left: 50vh;
    padding-right: 50vh;
}
</style>