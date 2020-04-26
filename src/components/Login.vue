<template>
    <div id="app">
        <div class="page-body">
            <form>
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
            <b-button pill variant="warning" v-on:click="login">Log-In</b-button>
            </form>
    </div>
    </div>    
</template>
<script>
export default {
    data: () => ({
      userName:'',
      passWord:'',
    }),
    methods:{
        login: function() {
            const loginData={
                username:this.userName,
                password:this.passWord
            }
            this.$store.dispatch('LogIn',loginData)
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