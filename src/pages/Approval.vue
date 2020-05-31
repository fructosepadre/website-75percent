<template>
<div>
	<div class="loader" :hidden="isLoaded"></div>
  <div :hidden="!isLoaded" v-if="getRouteSubjCode()" class="page-body">
    <div class="one">
      <div class="subject">
        <p class="heads">{{getRouteSubjCode()}}</p>
        <md-button class="md-raised lowercase">
          Approve All?
        </md-button>
      </div>
      <div class="gif-bod">
      </div>
    </div>
    <div class="student-list">
      <div v-for="(item,index) in this.enrollRequests" :key="index">
        <div class="studentRegistered">
          <p>{{item}}</p>
          <md-button class="md-raised lowercase" @click="approveInFireB(item,index)">
            Approve
          </md-button>
        </div>
      </div>
    </div>
  </div>
      <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>Approved!</span>
    </md-snackbar>
</div>
</template>
<script src="./js/approval.js"></script>
<style scoped>
.md-raised :hover{
background-color: black;
color: white;
}
.gif-bod{
  margin-top: 10vh;
  background: url('~../assets/approval.gif') no-repeat center;
  height: 50vh;
}
.loader{
	background: url('~../assets/loader-home.gif') no-repeat center;
  height: 100vh;
}
.lowercase {
 text-transform: none;
}
.page-body{
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.one{
  padding-top: 5vh;
  flex-basis: 40%;
  background-color:#09111F;
}
.student-list{
  padding-top: 10vh;
  max-height: 100vh;
  overflow: scroll;
  flex-basis: 60%;
}
.subject{
  height: 20vh;
  margin-left: 5vh;
  margin-right: 5vh;
  border-radius: 2vh;
  background-color: white;
}
.heads{
  font-size: 1.5em;
  padding-top: 20px;
}
.studentRegistered{
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 8vh;
}
.invisible{
  display: none;
}
</style> 