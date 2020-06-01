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
      let date = new Date()
      const hours = this.appendZeroes(date.getHours())
      const min = this.appendZeroes(date.getMinutes())
      const endmin = (parseInt(this.appendZeroes(date.getMinutes()))+1).toString()
      const sec = this.appendZeroes(date.getSeconds())
      const day = this.appendZeroes(date.getDate())
      const month = this.appendZeroes(date.getMonth()+1)
      const year = date.getFullYear()
      let setDate =`${day}-${month}-${year}`
      const start = `${hours}:${min}:${sec}`
      const end = `${hours}:${endmin}:${sec}`
      localStorage.setItem('Date',setDate)
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/attendance/'+subjectCode)
      .child(`${day}-${month}-${year}`)
      .set({
        validity:{
          startTime:start,
          endTime:end
        }
      })
      localStorage.setItem('selectedSub',subjectCode)
      this.$router.push({
        path:'/qr-generate',
        query: {subjCode:subjectCode}
      })
    }
  }
}