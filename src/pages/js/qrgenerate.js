import firebase from 'firebase'
export default {
  data:() =>({
    showSnackbar: false,
    position: 'center',
    duration: 2500,
    isInfinity: false,
    qrText:'',
    qrSize:0,
    teacherID: localStorage.getItem('facultyID'),
    subjCode: localStorage.getItem('selectedSub'),
    isGenerateQR:false,
    isMinus:true,
    isPlus:true,
    start:true,
    students:[],
    isLoaded:false,
    attendingStudents:[],
    common:[],
    finalAttendance:[],
    timer:1,
    done: false
  }),
  created(){
    setTimeout(this.getStudentList, 1000)
    setTimeout(this.showPage, 3000)
    setTimeout(this.getFromAttendanceList,7000)
    setTimeout(this.compareArrays,8000)  
  },
  methods:{
    generateQR: function(){
      this.isMinus=false;
      this.isPlus=false;
      this.isGenerateQR=true;
      this.qrSize=400;
      this.generateQREvery5sec();
    },
    appendZeroes(n){
      return n<10 ? '0'+n : n
    },
    generateQREvery5sec: function(){
      let date = new Date()
      const day = this.appendZeroes(date.getDate())
      const month = this.appendZeroes(date.getMonth()+1)
      const year = date.getFullYear()
      let setDate =`${day}-${month}-${year}`
      let cipherText={
        teacherID:this.teacherID,
        subjCode:this.subjCode,
        dateToday:setDate,
        timeNow:new Date().toISOString().substring(10,23)
        };
        this.$store.dispatch('QRgenerate',{cipherText,success:this.getCipherText})
        if(this.done!=true){
          setTimeout(this.generateQREvery5sec, 5000)
        }
        else
          return
    },
    getCipherText: function(response){
      let encryptedText='';
      Object.values(response).forEach((value)=>{encryptedText+=value+'|'})
      encryptedText=encryptedText.slice(0,-1);
      this.qrText=encryptedText;
    },
    minus: function(){
      this.isPlus=false;
      if(this.qrSize==100){
        this.isMinus=true
        return
      }
      this.qrSize-=50
    },
    plus: function(){
      this.isMinus=false;
      if(this.qrSize==600){
        this.isPlus=true
        return
      }
      this.qrSize+=50;
    },
    getStudentList(){
      if(this.timer==1){
      this.getClassesAndSetAttendance()
      }
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/'+localStorage.getItem('selectedSub'))
      .once('value')
      .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        let value = new RegExp('^RA+');
          if(value.test(childSnapshot.key)){
            this.students.push(childSnapshot.key)  
          }  
        })
      })
    },
    getFromAttendanceList(){
      if(this.timer==1){
        this.start=false
      }
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/attendance/'+this.$route.query.subjCode+'/'+localStorage.getItem('Date'))
      .once('value')
      .then(snapshot => {
      snapshot.forEach(childSnapshot => {
        if(childSnapshot.key!='isCreated' && this.attendingStudents.includes(childSnapshot.key)==false)
          this.attendingStudents.push(childSnapshot.key)
        })
      })
      this.timer+=1
      if(this.timer<12)
        setTimeout(this.getFromAttendanceList,4000)
      else{
        this.done=true
        this.showSnackbar=true
        this.isGenerateQR=false
        this.start=true
        this.qrSize=0
        this.isMinus=true
        this.isPlus=true
        return
      }
    },
    compareArrays(){
      this.common = this.students.filter(regNo => this.attendingStudents.includes(regNo))
      this.finalAttendance=this.common
      if(this.done!=true)
        setTimeout(this.compareArrays,2000)
      else
        return
    },
    showPage(){
      this.isLoaded=true
      return 
    },
    getClassesAndSetAttendance(){
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/'+this.$route.query.subjCode).child('classesConducted')
      .once('value')
      .then(snapshot => {
        setTimeout(this.setAttendance((parseInt(snapshot.val())+1).toString()),1000)
      })
    },
    setAttendance(value){
      firebase.database().ref('faculty/'+localStorage.getItem('SnapShotId')+'/'+this.$route.query.subjCode).update({'classesConducted':value})
    }
  }
}