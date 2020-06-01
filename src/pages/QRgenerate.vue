<template>
<div>
  <div class="loader" v-if="isLoaded==false"></div>
  <div v-else id="app">
    <div class="qr-body">
      <md-button :md-ripple="false" id="circleButton" @click="minus" :disabled=isMinus>
        <b-icon icon="dash-circle-fill"></b-icon>
      </md-button>
      <md-button :md-ripple="false" id="circleButton" @click="plus" :disabled=isPlus>
        <b-icon icon="plus-circle-fill"></b-icon>
      </md-button>
      <qriously :value=qrText :size=qrSize />

      <md-button class="md-raised md-accent" @click="generateQR" :hidden=isGenerateQR :disabled="start">
        <b-icon icon="person-bounding-box"></b-icon>
        Generate  QR
      </md-button>
    </div>
    <div class="student-list">
      <div v-for="(item,index) in this.students" :key="index">
        <div :class=" common.includes(item)==true ? 'studentRegistered attended' : 'studentRegistered'">
          <input :checked="common.includes(item)==true ? true: false" type="checkbox" :value="item" v-model="finalAttendance">
          {{item}}
        </div>
      </div>
        <md-button class="md-raised md-accent" :disabled="!start" @click="getClassesAndSetAttendance">
        Submit
        </md-button>
    </div>
  </div>
  <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
    <span>Now you can Submit or Make changes!</span>
  </md-snackbar>
</div>
</template>
<script src="./js/qrgenerate.js"></script>
<style scoped>
.loader{
	background: url('~../assets/loader-home.gif') no-repeat center;
  height: 100vh;
}
#app{
  margin-top: 5vh;
  display: flex;
  flex-direction: row;
  padding-left: 10vh;
}
.qr-body{
  margin-top: 5vh;
  flex-basis: 50%;
  position: sticky;
  top: 5vh;
  height: 100vh;
}
.student-list{
  padding-top: 10vh;
  flex-basis: 50%;
  overflow: auto;
}
#circleButton{
  font-size: 2em;
  border-radius: 20px;
}
.studentRegistered{
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 8vh;
}
.attended{
  color:greenyellow;
}
</style>