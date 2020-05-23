<template>
   <div class="page-body">
      <div class="subject">
         <div class="subjects-card" v-for="(item,index) in subjectCode" :key="index">
            <SubjectCard v-if="index<=subjectCode.length-5" :subjectCode="item" :subjectName="subjectName[index]"/>
         </div>
      </div>
      <div class="deets">
         <p style="font-size: 2rem;">Hey there {{ facultyName }} !</p>
         <br><br>
         Add more feats! like schedule, contact us
      </div>   
   </div> 
</template>
<script src="./js/home.js"></script>
<style scoped>
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
}
.deets{
   height: 80vh;
   width: 40vw;
   background-color: white;
   position: sticky; 
   top: 5vh;
   border-radius: 2vh;
   box-shadow: 0vh 0vh 1vh 0vh rgba(189, 162, 162, 0.4);
   background-color: ivory;
   padding-top: 5vh;
}
</style>