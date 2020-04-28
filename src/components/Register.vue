<template>
    <div id="app">
        <div class="page-body">
            <form @submit.prevent="register">
            <md-field md-clearable>
                <label>Teacher ID</label>
                <md-input v-model="userName"></md-input>
            </md-field>
            <br>
            <md-field md-clearable>
                <label>SRM Email ID</label>
                <md-input v-model="eMail"></md-input>
            </md-field>
            <br>
            <md-field>
                <label>Password</label>
                <md-input v-model="passWord1" type="password"></md-input>
            </md-field>
            <br>
            <md-field>
                <label>Confirm Password</label>
                <md-input v-model="passWord2" type="password"></md-input>
            </md-field>
            <br>
            <b-button pill type="submit" variant="warning" @click="validateRegister">Register</b-button>
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
      userName:'',
      eMail:'',
      passWord1:'',
      passWord2:'',
      passwordStatus: false,
      emailStatus: false,
      userNameStatus: false,
    }),
    methods:{
        validateTeacherID: function(){
            if(this.userName.length!=0)
                this.userNameStatus=true
            else    
                return swal("","Fill in TeacherID!","warning");
        },
        comparePasswords: function(){
            if(this.passWord1.length==0)
                return swal("","Fill in the password box!","warning");
                
            if(this.passWord1.length<6)
                return swal("","Use 6 or more characters for your password!","warning");
            
            if(this.passWord2.length==0)
                return swal("","Fill in the confirm password box!","warning");        

            if((this.passWord1==this.passWord2) && this.passWord1.length==this.passWord2.length)
                this.passwordStatus=true
            else    
                return swal("","Passwords not the same!","warning");    
        },
        validateEmail: function(){
            if(this.eMail.length==0)
                return swal("","Fill in the email box!","warning");
            else if(this.eMail.endsWith("@srmuniv.edu.in"))
                this.emailStatus=true
            else
                return swal("","Use your SRM account!","warning");
        },
        validateRegister: function(){
            this.comparePasswords(),
            this.validateEmail(),
            this.validateTeacherID()
        },
        register: function() {
            const registerData={
                username:this.userName,
                email:this.eMail,
                password:this.passWord1
            }
            if(this.userNameStatus==true && this.emailStatus==true && this.passwordStatus==true)
                this.$store.dispatch('Register',{registerData,success:this.onRegisterSuccess})
        },

        onRegisterSuccess(response){
            if(response=="Registered"){
                swal("",
                "Registered! You will be redirected to LogIn Page",
                "success",
                ).then(()=> {
                this.$router.push('/login')
                });
            }
            else if(response=="Duplicate"){
                    swal("",
                    "You are already registered! Redirecting..... to LogIn Page",
                    "warning").then(()=> {
                this.$router.push('/login')
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