import firebase from 'firebase'
export default {
  created(){
    setTimeout(this.getRequests, 2000)
    setTimeout(this.showPage, 3500)
  },
  data: ()=>({
    isLoaded:false,
    enrollRequests:[]
  }),
  methods:{
    getRequests(){
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/'+this.$route.query.subjCode+'/enrollmentRequests')
      .once('value')
      .then(snapshot => {
        snapshot.forEach(childSnapshot => { 
          this.enrollRequests.push(childSnapshot.key)
      })
    })
    },
    getRouteSubjCode(){
      return this.$route.query.subjCode
    },
    showPage(){
      this.isLoaded=true
      return 
    }
  }
}