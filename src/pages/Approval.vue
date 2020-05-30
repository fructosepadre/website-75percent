<template>
<div>
	<div class="loader" :hidden="isLoaded"></div>
  <div :hidden="!isLoaded" v-if="getRouteSubjCode()" class="page-body">
    <div class="one">
      <div class="subject">
        <p class="heads">{{getRouteSubjCode()}}</p>
        <p class="heads">{{getRouteSubjName()}}</p>
          <md-button class="md-raised lowercase">
            Approve All?
          </md-button>
      </div>
      <div class="subjects-card" v-for="(item,index) in subjectCode" :key="index">
        <div v-if="subjectName[index] && getRouteSubjCode()!==item" class="subject">
          <p class="heads">{{item}}</p>
          <p class="heads">{{subjectName[index]}}</p>
          <md-button class="md-raised lowercase" :md-ripple="false" @click="show(item)">
            Approve ?
          </md-button>
        </div>
      </div>
    </div>
    <!-- <div class="loader" :hidden="isLoaded"></div> -->
    <div class="two">
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
  padding-top: 2vh;
}
</style> 