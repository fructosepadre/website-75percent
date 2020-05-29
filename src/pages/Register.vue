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
<script src="./js/register.js"></script>
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