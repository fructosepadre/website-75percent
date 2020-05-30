import firebase from 'firebase'
import SubjectCard from '@/layout/SubjectCard.vue'
export default {
  components: {
    SubjectCard
  },
  created(){
    setTimeout(this.getSubjects, 1000)
    setTimeout(this.showPage, 4000)
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
                enrollmentRequestNum: grandChildSnapshot.numChildren()
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
    }
  }
}