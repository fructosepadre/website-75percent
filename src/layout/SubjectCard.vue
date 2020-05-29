<template>
  <md-card md-with-hover>
    <md-card-header>
      <div class="md-title">{{subjectCode}}</div>
      <div class="md-subhead">{{subjectName}}</div>
    </md-card-header>

    <md-card-actions>
      <md-button class="md-raised md-accent" @click="selectSubject(subjectCode)">
        Take Attendance !
      </md-button>
    </md-card-actions>
  </md-card>
</template>
<script src="./js/subjectcard.js"></script>
<style>
.md-card {
  width: 320px;
  margin: 4px;
  margin-bottom: 10vh;
}
</style>