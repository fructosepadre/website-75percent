<template>
<div>
	<div class="loader" :hidden="isLoaded"></div>
  <div :hidden="!isLoaded" class="page-body">
    <div :class="enrollmentRequestSubjects.length>0 ? 'deets ns' : 'deets nns'">
      <p style="font-size: 2rem;">Hey there {{ facultyName }} !</p>
      <br>
      <div v-if="enrollmentRequestSubjects.length>0">
        <h3 style="margin:30px; color:green;">NOTIFICATIONS <b-icon-bell animation="throb"></b-icon-bell></h3>
        <div class="Notification">
          <div v-for="(item,index) in enrollmentRequestSubjects" :key="index">
            <div class="approvals">
              <h5>You have {{item.enrollmentRequestNum}} pending approvals for {{item.subject}}</h5>
              <md-button style="background-color:white; color:black;" @click="selectSubjectForApproval(item.subject)">
                Take me there <b-icon-arrow-right></b-icon-arrow-right>
              </md-button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h3 style="margin:30px; color:red;">You have no notifications right now.....</h3>  
      </div>
    </div>
    <div v-if="subjectCode.length>0" class="subject">
      <div class="subjects-card" v-for="(item,index) in subjectCode" :key="index">
        <SubjectCard v-if="index<=subjectCode.length-5" :subjectCode="item" :subjectName="subjectName[index]"/>
      </div>
    </div>
  </div>
</div> 
</template>
<script src="./js/home.js"></script>
<style scoped>
.Notification{
  overflow: auto;
  max-height:45vh
}
.approvals{
  height: 10vh;
  background-color: aqua;
  margin-bottom: 5vh;
  padding-top: 5px;
}
.loader{
	background: url('~../assets/loader-home.gif') no-repeat center;
  height: 100vh;
}
.page-body{
  margin-top: 10vh;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  padding-left: 10vh;
  padding-right: 10vh;
}
.subject{
  flex-basis: 50%;
  padding-left: 30vh;
}
.deets{
  height: 80vh;
  width: 40vw;
  background-color: white;
  position: sticky; 
  top: 5vh;
  border-radius: 2vh;
  background-color: ivory;
  padding-top: 5vh;
}
.nns{
  box-shadow: 0vh 0vh 1vh 0vh red;
}
.ns{
  box-shadow: 0vh 0vh 1vh 0vh green;
}
</style>