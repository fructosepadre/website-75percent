<template>
    <div id="app">
        <div class="page-body">
            <form @submit.prevent="login">
            <md-field md-clearable>
                <label>Teacher ID</label>
                <md-input v-model="userName"></md-input>
            </md-field>
            <br>
            <md-field>
                <label>Password</label>
                <md-input v-model="passWord" type="password"></md-input>
            </md-field>
            <br>
            <b-button pill type="submit" variant="warning" @click="validateLogIn">Log-In</b-button>
            </form>
    </div>
    </div>    
</template>
<script>
import swal from 'sweetalert'
export default {
    data: () => ({
      userName:'',
      passWord:'',
      userNameStatus:false,
      passWordStatus:false
    }),
    methods:{
        validateTeacherID: function(){
            if(this.userName.length==0)
                return swal("","Fill in Teacher ID","warning");
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
                this.$store.dispatch('LogIn',{loginData})}

    }
}
</script>
<style scoped>
#app{
    display: flex;
    justify-content: center;
}
.page-body{
padding-left: 50vh;
padding-right: 50vh;
}
</style>