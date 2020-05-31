import firebase from 'firebase'
import SubjectCard from '@/layout/SubjectCard.vue'
export default {
  components: {
    SubjectCard
  },
  created(){
    setTimeout(this.getSubjects, 1000)
    setTimeout(this.showPage, 5000)
    setTimeout(this.changeNotificationShadow, 3000)
  },
  data: ()=>({
    subjectCode: [],
    subjectName: [],
    enrollmentRequestSubjects:[],
    facultyName:'',
    isLoaded:false,
  }),
  methods:{
    getStatuses(snapshot){
      let zerStatuscount=0
      snapshot.forEach(childSnapshot => {
        if(childSnapshot.child('status').val()==0){
          zerStatuscount++
        }
      })
      return zerStatuscount
    },
    getSubjects(){
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId'))
      .once('value')
      .then(snapshot => {
        this.facultyName=snapshot.val().name
        snapshot.forEach(childSnapshot => {
          childSnapshot.forEach(grandChildSnapshot => {
            if(grandChildSnapshot.key=='enrollmentRequests'){
              let enrollmentRequestObject = {
                subject: childSnapshot.key,
                enrollmentRequestNum: this.getStatuses(grandChildSnapshot)
              }
              this.enrollmentRequestSubjects.push(enrollmentRequestObject)
            }
          })
          this.subjectCode.push(childSnapshot.key)
          this.subjectName.push(childSnapshot.val().nameSub)   
        })
      })
    },
    showPage(){
      this.isLoaded=true
      return 
    },
    selectSubjectForApproval(subjectCode){
      this.$router.push({
        path:'/approval',
        query: {subjCode:subjectCode}
      })  
    }
  }
}