import firebase from 'firebase'
export default {
  created(){
    setTimeout(this.getRequests, 3000)
    setTimeout(this.showPage, 3500)
  },
  data: ()=>({
    isLoaded:false,
    enrollRequests:[],
    student:'',
    faculty:localStorage.getItem('facultyID'),
    studentObject:{},
    studentName:'',
    studentSubject:''
  }),
  methods:{
    getRequests(){
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/'+this.$route.query.subjCode+'/enrollmentRequests')
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => { 
          childSnapshot.forEach(grandChildSnapshot => {
            if(grandChildSnapshot.key==='status' && grandChildSnapshot.val()==0)
            this.enrollRequests.push(childSnapshot.key)
          })
        })
      })
    },
    getRouteSubjCode(){
      return this.$route.query.subjCode
    },
    showPage(){
      this.isLoaded=true
      return 
    },
    approveInFireB(studentCode){
      this.student=studentCode
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/'+this.$route.query.subjCode+'/enrollmentRequests/').child(studentCode).update({'status':'1'})
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/'+this.$route.query.subjCode+'/enrollmentRequests/'+studentCode)
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => { 
        if(childSnapshot.key==="studentName")
          this.studentName=childSnapshot.val()
          if(childSnapshot.key==="studentSubject")
          this.studentSubject=childSnapshot.val()
        })
      })
      setTimeout(this.setInFireB(), 2000)
    },
    setInFireB(){
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')).child(this.$route.query.subjCode).child(this.student)
      .set({
          attendedClasses:"0",
          facultyStudent:localStorage.getItem('facultyID'),
          keySubject:this.$route.query.subjCode,
          nameStudent:this.studentName,
          regNoStudent:this.student,
          subjectStudent:this.studentSubject,
          type:"regularStudent"
      })
    }
  }
}