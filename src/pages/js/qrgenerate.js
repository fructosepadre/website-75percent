export default {
    data:() =>({
        qrText:'',
        qrSize:0,
        teacherID: localStorage.getItem('facultyID'),
        subjCode: localStorage.getItem('selectedSub'),
        isGenerateQR:false,
        isMinus:true,
        isPlus:true
    }),
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
            this.$store.dispatch('QRgenerate',{cipherText,success:this.getCipherText});
            setTimeout(this.generateQREvery5sec, 5000);
        },
        getCipherText: function(response){
            let encryptedText='';
            Object.values(response).forEach((value)=>{encryptedText+=value+'|'});
            encryptedText=encryptedText.slice(0,-1);
            this.qrText=encryptedText;
        },
        minus: function(){
            this.isPlus=false;
            if(this.qrSize==100){
                this.isMinus=true;
                return;
            }
            this.qrSize-=50;

        },
        plus: function(){
            this.isMinus=false;
            if(this.qrSize==700){
                this.isPlus=true;
                return;
            }
            this.qrSize+=50;
        }
    }
}