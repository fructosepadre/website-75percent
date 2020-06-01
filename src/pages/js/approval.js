import firebase from 'firebase'
export default {
  created(){
    setTimeout(this.getRequests, 3000)
    setTimeout(this.showPage, 5000)
  },
  data: ()=>({
    showSnackbar: false,
    position: 'center',
    duration: 500,
    isInfinity: false,
    isLoaded:false,
    enrollRequests:[],
    student:'',
    faculty:localStorage.getItem('facultyID'),
    studentObject:{},
    studentName:'',
    studentSubject:'',
    isEmpty:false
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
      if(this.isLoaded){
        if(this.enrollRequests.length>0){
          this.isEmpty = false
        }
        else{
          this.isEmpty = true
        }
      }
      return
    },
    addClass(index,className,toBeAddedClassName){
      let x = document.getElementsByClassName(className)
      x[index].classList.add(toBeAddedClassName)
    },
    approveInFireB(studentCode,index){
      this.showSnackbar=true
      this.addClass(index,'studentRegistered','invisible')
      this.student=studentCode
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/'+this.$route.query.subjCode+'/enrollmentRequests/').child(studentCode).update({'status':'1'})
      setTimeout(this.getFromFireB(studentCode), 1000)
    },
    getFromFireB(studentCode){
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