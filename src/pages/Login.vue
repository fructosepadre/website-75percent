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
<script src="./js/login.js"></script>
<style scoped>
#app{
    display: flex;
    justify-content: center;
    padding-top: 20px;
    position:sticky;
    top:80vh;
    width:100%

}
.page-body{
    padding: 20vh 0vh 20vh 0vh;
}
</style>