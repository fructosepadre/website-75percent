<template>
    <div id="app">
        <div class="page-body">
            <form>
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
            <b-button pill variant="warning" v-on:click="register">Register</b-button>
            </form>
    </div>
    </div>    
</template>
<script>
export default {
    data: () => ({
      userName:'',
      eMail:'',
      passWord1:'',
      passWord2:''
    }),
    methods:{
        register: function() {
            const registerData={
                username:this.userName,
                email:this.eMail,
                password:this.passWord1
            }
            // window.console.log(registerData);
            this.$store.dispatch('Register',registerData)
        }
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