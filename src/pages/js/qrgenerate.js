import firebase from 'firebase'
export default {
  data:() =>({
    qrText:'',
    qrSize:0,
    teacherID: localStorage.getItem('facultyID'),
    subjCode: localStorage.getItem('selectedSub'),
    isGenerateQR:false,
    isMinus:true,
    isPlus:true,
    students:[],
    isLoaded:false  
  }),
  created(){
    setTimeout(this.getStudentList, 1000)
    setTimeout(this.showPage, 3000)  
  },
  methods:{
    generateQR: function(){
      this.isMinus=false;
      this.isPlus=false;
      this.isGenerateQR=true;
      this.qrSize=400;
      this.generateQREvery5sec();
    },
    generateQREvery5sec: function(){
      let cipherText={
        teacherID:this.teacherID,
        subjCode:this.subjCode,
        dateToday:new Date().toISOString().substring(0, 10),
        timeNow:new Date().toISOString().substring(10,23)
        };
        this.$store.dispatch('QRgenerate',{cipherText,success:this.getCipherText})
        setTimeout(this.generateQREvery5sec, 5000)
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
    showPage(){
      this.isLoaded=true
      return 
    }
  }
}