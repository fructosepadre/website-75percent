<template>
    <div id="app">
        <div class="qr-body">
        <md-button :md-ripple="false" id="circleButton" @click="minus" :disabled=isMinus>
            <b-icon icon="dash-circle-fill"></b-icon>
        </md-button>
        <md-button :md-ripple="false" id="circleButton" @click="plus" :disabled=isPlus>
            <b-icon icon="plus-circle-fill"></b-icon>
        </md-button>
        <qriously :value=qrText :size=qrSize />
        
        <md-button class="md-raised md-accent" @click="generateQR" :disabled=isGenerateQR>
            <b-icon icon="person-bounding-box"></b-icon>
            Generate  QR
        </md-button> 
        </div>
    </div>    
</template>
<script src="./js/qrgenerate.js"></script>
<style scoped>
.qr-body{
    padding-top: 20px;
    padding-top: 20px;
}
#circleButton{
    font-size: 2em;
    border-radius: 20px;
}
</style>