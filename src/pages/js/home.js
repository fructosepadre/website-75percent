import firebase from 'firebase'
import SubjectCard from '@/layout/SubjectCard.vue'
export default {
    components: {
        SubjectCard
    },
    created(){
      setTimeout(this.getSubjects, 1000);
    },
    data: ()=>({
       subjectCode: [],
       subjectName: [],
       facultyName:''
    }),
    methods:{
       getSubjects(){
         firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId'))
         .once('value')
         .then(snapshot => {
            this.facultyName=snapshot.val().name
            snapshot.forEach(childSnapshot => {
            this.subjectCode.push(childSnapshot.key)
            this.subjectName.push(childSnapshot.val().nameSub)   
            })
         })
      }
    }
}