import firebase from 'firebase'
export default {
  props:{
    subjectCode: String,
    subjectName: String,
  },
  methods:{
    appendZeroes(n){
      return n<10 ? '0'+n : n
    },
    selectSubject(subjectCode){
      let date=new Date()
      const day=this.appendZeroes(date.getDate())
      const month=this.appendZeroes(date.getMonth()+1)
      const year=date.getFullYear()
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/attendance/'+subjectCode)
      .child(`${day}-${month}-${year}`).set({isCreated:'1'})
      localStorage.setItem('selectedSub',subjectCode)
      this.$router.push({
        path:'/qr-generate',
        query: {subjCode:subjectCode}
      })
    }
  }
}