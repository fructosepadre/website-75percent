import firebase from 'firebase'
export default {
  created(){
    setTimeout(this.getSubjects, 1000)
    setTimeout(this.showPage, 3500)
  },
  data: ()=>({
    subjectCode: [],
    subjectName: [],
    isLoaded:false,
  }),
  methods:{
    getSubjects(){
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId'))
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => {
          this.subjectCode.push(childSnapshot.key)
          this.subjectName.push(childSnapshot.val().nameSub)   
        })
      })
    },
    getRouteSubjCode(){
      return this.$route.query.subjCode
    },
    getRouteSubjName(){
      let index = this.subjectCode.indexOf(this.$route.query.subjCode)
      return this.subjectName[index]
    },
    show(subjCode){
      this.$router.replace({
        query:{subjCode:subjCode}
      })
    },
    showPage(){
      this.isLoaded=true
      return 
    }
    // selectSubjectForApproval(subjectCode){
    //   this.$router.push({
    //     path:'/approval',
    //     query: {subjCode:subjectCode}
    //   })  
    // }
  }
}