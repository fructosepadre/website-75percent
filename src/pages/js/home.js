import firebase from 'firebase'
import SubjectCard from '@/layout/SubjectCard.vue'
export default {
    components: {
        SubjectCard
    },
    created(){
       firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId'))
       .once('value').
       then(snapshot => {
          this.facultyName=snapshot.val().name
          snapshot.forEach(childSnapshot => {
          this.subjectCode.push(childSnapshot.key)
          this.subjectName.push(childSnapshot.val().nameSub)   
          })
       })
    },
    data: ()=>({
       subjectCode: [],
       subjectName: [],
       facultyName:''
    }),
    methods:{
    }
}