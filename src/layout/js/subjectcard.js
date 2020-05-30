export default {
  props:{
    subjectCode: String,
    subjectName: String,
  },
  methods:{
    selectSubject(subjectCode){
      localStorage.setItem('selectedSub',subjectCode)
      this.$router.push({
        path:'/qr-generate',
        query: {subjCode:subjectCode}
      })          
    }
  }
}