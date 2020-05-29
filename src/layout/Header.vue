<template>
  <main>
    <div id="head">
      <md-toolbar class="md-primary" >
        <h1>e-Attendance</h1>
        <div class="md-toolbar-section-end" style="height:100%;">
          <md-button class="md-raised" v-if="displayHomeButton" @click="homecoming">
            <b-icon-house-fill></b-icon-house-fill>Home
          </md-button>
          <md-button class="md-raised md-accent" @click="logout" v-if="displayExitButton">
            LogOut
          </md-button>
        </div>
      </md-toolbar>
    </div>
  </main>
</template>
<script src="./js/header.js"></script>
<style scoped>
#head{
  height: 8vh;
  font-family: 'Eurostile', sans-serif;
  color: white;
  width: 100%;
}
</style>