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
    </div>
    <div class="two">
      {{enrollRequests}}
    </div>
  </div>
</div>
</template>
<script src="./js/approval.js"></script>
<style scoped>
.loader{
	background: url('~../assets/loader-home.gif') no-repeat center;
  height: 100vh;
}
.lowercase {
 text-transform: none
}
.page-body{
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.one{
  padding-top: 5vh;
  max-height: 100vh;
  flex-basis: 40%;
  overflow: auto;
}
.two{
  padding-top: 10vh;
  background-color: teal;
  height: 100vh;
  flex-basis: 60%;
}
.subject{
  height: 20vh;
  margin-left: 5vh;
  margin-right: 5vh;
  margin-bottom: 5vh;
  box-shadow: 0vh 0vh 1vh 0vh black;
  border-radius: 2vh;
}
.heads{
  font-size: 1.5em;
  padding-top: 20px;
}
</style> 