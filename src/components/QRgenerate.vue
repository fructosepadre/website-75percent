<template>
    <div id="app">
        <div class="qr-body">
        <qriously :value=qrText :size=qrSize />
        <md-button class="md-raised md-accent" @click="generateQR">
            <b-icon icon="person-bounding-box"></b-icon>
            Generate  QR
        </md-button>
        </div>
    </div>    
</template>
<script>
export default {
    data:() =>({
        qrText:'',
        qrSize:100,
        teacherID:'RA1611008010474',
        subjCode:'15IT314J',
        dateToday:'25-12-2018',
        timeNow:'123456789'
    }),
    methods:{
        generateQR: function(){
            const cipherText={
            teacherID:this.teacherID,
            subjCode:this.subjCode,
            dateToday:this.dateToday,
            timeNow:this.timeNow
            };                
            this.$store.dispatch('QRgenerate',{cipherText,success:this.getCipherText});
            this.qrSize=500;
        },
        getCipherText: function(response){
            let encryptedText='';
            Object.values(response).forEach((value)=>{encryptedText+=value+'|'});
            encryptedText=encryptedText.slice(0,-1);
            this.qrText=encryptedText;
        }
    }
}
</script>
<style scoped>
.qr-body{
    padding-top: 20px;
}
</style>